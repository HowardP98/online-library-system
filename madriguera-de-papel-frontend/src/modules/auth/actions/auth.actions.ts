import axios from 'axios';

const API_BASE = 'http://localhost:8080';

// Revisa si es Admin o User
export const realizarLogin = async (username: string, password: string) => {
    const authHeader = 'Basic ' + btoa(`${username}:${password}`);
    const config = { headers: { 'Authorization': authHeader } };

    try {
        // ruta de ADMIN
        await axios.get(`${API_BASE}/admin/libros`, config);
        return { rol: 'ADMIN', token: authHeader };

    } catch (error: any) {
        // Si devuelve un 403 no es admin
        if (error.response && error.response.status === 403) {
            await axios.get(`${API_BASE}/usuarios/libros/disponibles`, config);
            return { rol: 'USER', token: authHeader };
        }
        
        // Si es 401 
        throw error;
    }
};