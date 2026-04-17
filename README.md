# Entrevista técnica — API REST + React (Redux)

Repositorio: **[github.com/JeremiNzo/technical-test](https://github.com/JeremiNzo/technical-test)**

Proyecto con **NestJS** (API) y **React + Redux Toolkit** (listado de libros con autores y búsqueda en el cliente).

## Requisitos

- [Node.js](https://nodejs.org/) **20 o superior** (recomendado para el frontend con Vite 8).
- npm (incluido con Node).

## Descargar el repositorio

```bash
git clone https://github.com/JeremiNzo/technical-test.git
cd technical-test
```

## 1. Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

Por defecto la API queda en **http://localhost:3000** (CORS habilitado para el front).

### Endpoints

| Método | Ruta        | Descripción        |
|--------|-------------|--------------------|
| GET    | `/books`    | Lista de libros    |
| GET    | `/authors`  | Lista de autores   |

## 2. Frontend (Vite + React + Redux)

En **otra terminal**, desde la raíz del proyecto:

```bash
cd frontend
npm install
npm run dev
```

Abre la URL que muestra la consola (normalmente **http://localhost:5173**).

El frontend espera el API en `http://localhost:3000`. Con el backend arrancado, verás los libros y podrás filtrar por título o autor **solo en el cliente** (sin nuevas peticiones al servidor).

## Scripts útiles

| Ubicación | Comando        | Uso                          |
|-----------|----------------|------------------------------|
| `backend` | `npm run build` | Compilar Nest                |
| `backend` | `npm run start:prod` | Ejecutar build en producción |
| `frontend`| `npm run build` | Build de producción (Vite)   |
| `frontend`| `npm run preview` | Previsualizar el build       |

## Estructura del repo

```
technical-test/
├── backend/    # API NestJS
├── frontend/   # App React + Redux
└── README.md
```

## Licencia

Uso privado / entrevista (ajusta según corresponda).
