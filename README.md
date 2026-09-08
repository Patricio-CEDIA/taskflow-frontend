# taskflow-frontend

Repo de arranque del frontend de TaskFlow para el curso *Desarrollo Ágil y Frameworks para Aplicaciones Web*.

## Cómo se usa este repo

Cada rama `sesion-NN` es el punto de partida de la práctica de esa sesión: contiene el código ya construido en la práctica de la sesión **anterior**, más placeholders (`// TODO(sesion-NN): ...` o valores `{{REEMPLAZAR}}`) exactamente en los archivos que esa sesión debe completar.

**Importante:** este repo no incluye el esqueleto completo que genera Vite (`vite.config.js` base, `index.html`, `public/`, etc. sí están, pero no cada archivo de configuración que Vite regenera solo). El flujo es:

```bash
npm create vite@latest taskflow-frontend -- --template react   # Sesión 6, una sola vez
cd taskflow-frontend
# copia dentro de esta carpeta los archivos de la rama de tu sesión actual,
# reemplazando los que correspondan (src/)
npm install
npm run dev
```

## Ramas disponibles

| Rama | Punto de partida para | Qué agrega/completa esa sesión |
|---|---|---|
| `sesion-06` | Sesión 6 — React + conexión real a la API | Crear el proyecto Vite, construir `Board`, `Column`, `TaskCard` con estado dinámico y el formulario básico, crear/eliminar/cambiar-estado de una tarea, registro de usuario, y conectar desde el inicio a la API ya autenticada (`src/services/api.js`, `PrivateRoute`, login/registro reales) — editar una tarea existente es la Tarea 3 |
| `sesion-07` | Sesión 7 — Despliegue | `README.md` final del proyecto y `.env.example` para la URL de la API de producción |

Cada rama se creó a partir de la anterior, así que `git log --oneline` refleja la progresión real de la práctica del curso. Antes de la Sesión 6 no existe ninguna rama de este repo — el backend (`taskflow-backend`) se construye completo primero (Sesiones 4-5).
