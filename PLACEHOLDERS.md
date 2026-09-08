# Placeholders de esta rama (sesion-07)

Punto de partida: TaskFlow conectado a la API real y con `/dashboard` protegido, incluyendo crear/eliminar/cambiar-estado de tareas y registro (Sesión 6) — todo resuelto en esta rama, incluyendo el cambio de la URL de la API a una variable de entorno (`VITE_API_URL`). Editar una tarea existente queda fuera de esta rama: es la Tarea 3.

| Archivo | Qué reemplazar |
|---|---|
| `.env.example` | El valor de `VITE_API_URL` (local o de producción, según el paso del despliegue) |
| `docs/README-PROYECTO.md` | Los 3 bloques `{{REEMPLAZAR}}` (descripción, versión de React, pasos de arranque y build) |

## Comando de arranque

```bash
npm install
cp .env.example .env   # y edita VITE_API_URL
npm run dev
```

## Build para desplegar

```bash
npm run build
# la carpeta dist/ es lo que se sube a Vercel/Netlify
```
