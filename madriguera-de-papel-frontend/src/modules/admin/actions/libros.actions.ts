import axios from 'axios';
import type { Libro } from '../../layout/interfaces/libro'; 

const API_BASE = 'http://localhost:8080';

const getConfig = () => ({
  headers: { 'Authorization': localStorage.getItem('auth'), 'Content-Type': 'application/json' }
});

export const obtenerLibros = async () => {
  const response = await axios.get(`${API_BASE}/admin/libros`, getConfig());
  return response.data;
};

export const guardarNuevoLibro = async (libro: Libro) => {
  const response = await axios.post(`${API_BASE}/admin/libros`, libro, getConfig());
  return response.data;
};

export const actualizarLibro = async (id: number, libro: Libro) => {
  const response = await axios.put(`${API_BASE}/admin/libros/${id}`, libro, getConfig());
  return response.data;
};

export const borrarLibro = async (id: number) => {
  const response = await axios.delete(`${API_BASE}/admin/libros/${id}`, {
    ...getConfig(),
    data: {} 
  });
  return response.data;
};