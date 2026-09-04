# taskflow-frontend

Repo de arranque del frontend de TaskFlow para el curso *Desarrollo Ágil y Frameworks para Aplicaciones Web*.

## Cómo se usa este repo

Cada rama `sesion-NN` es el punto de partida de la práctica de esa sesión: contiene el código ya construido en la práctica de la sesión **anterior**, más un bloque provisional (que ya funciona) y, comentado justo debajo, el bloque real que hay que descomentar en los archivos que esa sesión debe completar — ver `PLACEHOLDERS.md` de cada rama para el detalle. Nunca se deja el archivo sin compilar: siempre hay una versión activa, aunque sea básica.

**Importante:** este repo no incluye el esqueleto completo que genera Vite (`vite.config.js`, `index.html` y `package.json` sí están, pero no cada archivo que Vite regenera solo, como `public/`). El flujo es:

```bash
npm create vite@latest taskflow-frontend -- --template react   # Sesión 4, una sola vez
cd taskflow-frontend
# copia dentro de esta carpeta los archivos de la rama de tu sesión actual,
# reemplazando los que correspondan (src/)
npm install
npm run dev
```

## Ramas disponibles

| Rama | Punto de partida para | Qué agrega/completa esa sesión |
|---|---|---|
| `sesion-04` | Sesión 4 — React | Crear el proyecto Vite y construir `Board`, `Column`, `TaskCard` con estado dinámico y el formulario básico |
| `sesion-06` | Sesión 6 — Integración | Conectar con la API real (`src/services/api.js`), `PrivateRoute`, envío del token |
| `sesion-07` | Sesión 7 — Despliegue | `README.md` final del proyecto y `.env.example` para la URL de la API de producción |

Cada rama se creó a partir de la anterior, así que `git log --oneline` refleja la progresión real de la práctica del curso.
