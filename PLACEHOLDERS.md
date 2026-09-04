# Qué descomentar en esta rama (sesion-04)

Punto de partida: proyecto Vite recién creado (Paso 1 de la práctica) — el resto de los archivos de esta rama ya están en el árbol. Cada uno trae una versión provisional que ya funciona (para que `npm run dev` nunca muestre una pantalla en blanco) y, comentada justo debajo, la versión que hay que descomentar en la práctica.

| Archivo | Qué descomentar | Paso de la práctica |
|---|---|---|
| `src/data/mockTasks.js` | El arreglo con las 4 tareas de ejemplo | Paso 2 |
| `src/components/TaskCard.jsx` | El JSX completo de la tarjeta (título, badge de estado, botón "Avanzar") | Paso 3 |
| `src/components/Column.jsx` | El JSX completo con el `.map()` que renderiza un `TaskCard` por tarea | Paso 3 |
| `src/components/Board.jsx` | `cambiarEstado()` y `agregarTarea()` | Paso 3 y Paso 4 |
| `src/App.jsx` | Las rutas `/login`, `/register`, `/dashboard` con React Router | Paso 5 |

En cada archivo, primero se **borra** el bloque provisional (el que ya está activo) y luego se **descomenta** el bloque de abajo — nunca dejes los dos activos a la vez, o el archivo queda con dos declaraciones del mismo nombre. Atajo del editor para descomentar un bloque seleccionado: `Ctrl+/` en Windows/Linux, `Cmd+/` en Mac.

`src/pages/Login.jsx`, `Register.jsx` y `Dashboard.jsx` ya están listos para esta sesión (se completan como parte de la Tarea 3, más adelante).

## Comando de arranque

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` — el tablero se ve vacío pero con sus 3 columnas (gracias al CSS ya incluido) desde el primer momento, antes de descomentar nada.
