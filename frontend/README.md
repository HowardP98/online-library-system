# 🎨 Library System - Frontend UI

Interfaz de usuario moderna y reactiva para la gestión de la biblioteca, diseñada para ofrecer una experiencia fluida, rápida y escalable.

---

## 🛠️ Stack Tecnológico

* **Vue.js 3**: Framework progresivo para construir interfaces de usuario reactivas.
* **Tailwind CSS**: Framework de utilidades para diseño moderno y responsive.
* **Vite**: Herramienta de desarrollo ultrarrápida para frontend.
* **Axios**: Cliente HTTP para consumir la API REST del backend.

---

## 🚀 Configuración y Ejecución

### 🔧 Requisitos Previos

* Node.js (versión 18 o superior recomendada).
* npm o yarn.

---

### 📥 Instalación

1. Entra en la carpeta del frontend e instala las dependencias:

```bash
npm install
```

2. Configura la conexión con la API creando un archivo `.env` en la raíz del frontend:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. La aplicación estará disponible en:

```
http://localhost:5173
```

---

### 🏗️ Build de Producción

Para generar la versión optimizada:

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

---

## 📦 Estructura del Proyecto

```
frontend/
 ├── public/                # Archivos estáticos
 ├── src/
 │   ├── assets/            # Recursos (imágenes, estilos)
 │   ├── components/        # Componentes reutilizables
 │   ├── views/             # Vistas principales
 │   ├── router/            # Configuración de rutas
 │   ├── services/          # Llamadas a la API (Axios)
 │   ├── store/ (opcional)  # Estado global (si aplica)
 │   ├── App.vue            # Componente raíz
 │   └── main.js            # Punto de entrada
 ├── .env                   # Variables de entorno
 ├── index.html             # HTML principal
 └── package.json
```

---

## 🔌 Integración con Backend

El frontend se comunica con la API REST del backend mediante Axios.

Ejemplo de configuración básica:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
```

---

## 📚 Funcionalidades Principales

* 📖 Visualización de catálogo de libros
* ➕ Creación y edición de libros
* ❌ Eliminación de registros
* 👤 Gestión de usuarios
* 🔄 Gestión de préstamos
* 🔍 Búsqueda y filtrado en tiempo real

---

## 🎨 UI / UX

* Diseño responsive adaptado a móvil y escritorio
* Componentes reutilizables
* Interfaz limpia basada en utilidades de Tailwind
* Navegación SPA (Single Page Application)

---

## 🧪 Testing (Opcional)

Si añades testing (por ejemplo con Vitest):

```bash
npm run test
```

---

## 🌍 Variables de Entorno

Ejemplo:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## 📌 Notas

* Asegúrate de que el backend esté corriendo antes de usar el frontend.
* Puedes modificar la URL de la API según el entorno (dev/prod).
* Ideal para desplegar en plataformas como Vercel o Netlify.

---

## 👨‍💻 Autor

Desarrollado como parte del sistema de gestión de biblioteca (Frontend UI).
