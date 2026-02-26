# 🔵🔴 Guía Completa de Configuración y Ejecución - FC Barcelona Team API

Esta guía te proporcionará los pasos detallados para poner en marcha tanto el backend (API) como el frontend (React) del proyecto. El proyecto ha sido reestructurado para separar las responsabilidades y permitir un desarrollo más limpio.

---

## 📂 Estructura del Proyecto

El proyecto se divide en dos carpetas principales:
- **`backend/`**: API construida con FastAPI (Python). Gestiona los datos de los jugadores desde un archivo JSON.
- **`frontend/`**: Interfaz de usuario construida con React, Vite y Tailwind CSS.

---

## 🐍 1. Configuración del Backend (FastAPI)

El backend es el motor que sirve la información de los jugadores.

### Requisitos Previos
- Tener instalado **Python 3.8 o superior**.

### Pasos para Ejecutar
1. **Abre una terminal** y navega a la carpeta del proyecto.
2. **Accede a la carpeta del backend:**
   ```powershell
   cd backend
   ```

3. **Crear un entorno virtual (Recomendado):**
   ```powershell
   python -m venv venv
   ```

4. **Activar el entorno virtual:**
   - **Windows:**
     ```powershell
     .\venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     source venv/bin/activate
     ```

5. **Instalar las dependencias:**
   ```powershell
   pip install -r requirements.txt
   ```

6. **Lanzar el servidor de desarrollo:**
   ```powershell
   python -m uvicorn main:app --reload --port 8000
   ```
   > ℹ️ El servidor estará disponible en: [http://localhost:8000](http://localhost:8000)
   > Puedes acceder a la documentación interactiva en: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## ⚛️ 2. Configuración del Frontend (React + Vite)

El frontend es la parte visual donde podrás ver las fichas de los jugadores y sus estadísticas.

### Requisitos Previos
- Tener instalado **Node.js (v18 o superior)** y **npm**.

### Pasos para Ejecutar
> [!IMPORTANT]
> **Si tienes errores de "ejecución de scripts deshabilitada" en PowerShell**, usa el comando de ejecución alternativo que se muestra abajo.

1. **Abre una NUEVA terminal** y navega a la carpeta del proyecto.
2. **Accede a la carpeta del frontend:**
   ```powershell
   cd frontend
   ```

3. **Instalar las dependencias de Node:**
   ```powershell
   npm install
   ```

4. **Lanzar el servidor de desarrollo:**
   - **Opción Estándar:**
     ```powershell
     npm run dev
     ```
   - **Opción Recomendada para Windows (Evita errores de scripts):**
     ```powershell
     npx vite --port 5173
     ```
   > ℹ️ La aplicación se abrirá en: [http://localhost:5173](http://localhost:5173)

---

## 🚀 3. Resumen Rápido (Cheat Sheet)

| Acción | Comando (Backend) | Comando (Frontend) |
| :--- | :--- | :--- |
| **Directorio** | `cd backend` | `cd frontend` |
| **Instalación** | `pip install -r requirements.txt` | `npm install` |
| **Ejecución** | `python -m uvicorn main:app --reload` | `npx vite` |

---

## 🛠️ Solución de Problemas Comunes

1. **Error: "npm.ps1 cannot be loaded"**: Esto ocurre en Windows PowerShell por políticas de seguridad. Usa `npx vite` en lugar de `npm run dev` para saltarte este bloqueo.
2. **Error de CORS**: Asegúrate de que el backend esté corriendo en el puerto 8000.
3. **Módulos no encontrados**: Asegúrate de haber ejecutado `npm install` dentro de la carpeta `frontend/`.

---

¡Disfruta explorando la plantilla del FC Barcelona! 🔵🔴
