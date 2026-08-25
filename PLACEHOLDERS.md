# Placeholders de esta rama (sesion-04)

Punto de partida: proyecto Vite recién creado (Paso 1 de la práctica) — el resto de los archivos de esta rama ya están en el árbol, con placeholders exactamente donde la práctica te pide escribir código.

| Archivo | Qué reemplazar | Paso de la práctica |
|---|---|---|
| `src/data/mockTasks.js` | El arreglo con al menos 4 tareas de ejemplo | Paso 2 |
| `src/components/TaskCard.jsx` | El JSX de la tarjeta (título, badge de estado, botón "Avanzar") | Paso 3 |
| `src/components/Column.jsx` | El `.map()` que renderiza un `TaskCard` por tarea | Paso 3 |
| `src/components/Board.jsx` | `cambiarEstado()` y `agregarTarea()` | Paso 3 y Paso 4 |
| `src/App.jsx` | Las rutas `/login`, `/register`, `/dashboard` con React Router | Paso 5 |

`src/pages/Login.jsx`, `Register.jsx` y `Dashboard.jsx` ya están listos para esta sesión (se completan como parte de la Tarea 3, más adelante).

## Comando de arranque

```bash
npm install
npm install react-router-dom   # si tu proyecto local aún no lo tiene
npm run dev
```

Abre `http://localhost:5173` — deberías ver el tablero vacío hasta que completes `mockTasks.js`.
