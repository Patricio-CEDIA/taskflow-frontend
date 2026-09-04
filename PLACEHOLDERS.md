# Qué descomentar en esta rama (sesion-06)

Punto de partida: proyecto Vite recién creado (Paso 1 de la práctica) — el resto de los archivos de esta rama ya están en el árbol. Cada uno trae una versión provisional que ya funciona (para que `npm run dev` nunca muestre una pantalla en blanco) y, comentada justo debajo, la versión que hay que descomentar en la práctica. El backend ya está completo y protegido (Sesiones 4-5): aquí no hay ningún paso de datos simulados, se consume la API real desde el inicio.

| Archivo | Qué descomentar | Paso de la práctica |
|---|---|---|
| `src/components/TaskCard.jsx` | El JSX completo de la tarjeta (título, badge de estado, botón "Avanzar") | Paso 2 |
| `src/components/Column.jsx` | El JSX completo con el `.map()` que renderiza un `TaskCard` por tarea | Paso 2 |
| `src/components/Board.jsx` | `cambiarEstado()`, `agregarTarea()` y el `useEffect` que carga las tareas reales | Pasos 2, 3 y 5 |
| `src/App.jsx` | Las rutas `/login`, `/register`, `/dashboard` (esta última envuelta en `PrivateRoute`) | Paso 4 |
| `src/services/api.js` | La instancia real de `axios` con el interceptor de token | Paso 5 |
| `src/pages/Login.jsx` | `handleSubmit`: `POST /login`, guardar el token, navegar a `/dashboard` | Paso 5 |
| `src/components/PrivateRoute.jsx` | La verificación del token guardado | Paso 6 |

En cada archivo, primero se **borra** el bloque provisional (el que ya está activo) y luego se **descomenta** el bloque de abajo — nunca dejes los dos activos a la vez, o el archivo queda con dos declaraciones del mismo nombre. Atajo del editor para descomentar un bloque seleccionado: `Ctrl+/` en Windows/Linux, `Cmd+/` en Mac.

`src/pages/Register.jsx` ya viene lista para esta sesión (se completa como parte de la Tarea 3, más adelante).

## Comando de arranque

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` — el tablero se ve vacío pero con sus 3 columnas (gracias al CSS ya incluido) desde el primer momento, antes de descomentar nada. Con el backend (`taskflow-backend`, rama `sesion-05`) corriendo en `http://localhost:8000`, el flujo completo debería funcionar tras el Paso 6: login → tablero cargado con tareas reales.
