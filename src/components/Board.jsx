import { useState } from 'react';
import { mockTasks } from '../data/mockTasks';
import Column from './Column';

function Board() {
  const [tasks, setTasks] = useState(mockTasks);
  const [nuevoTitulo, setNuevoTitulo] = useState('');

  // TODO(sesion-04) — Paso 3: implementa cambiarEstado(id, nuevoEstado) usando
  // setTasks con .map(), reemplazando solo la tarea cuyo id coincida.
  const cambiarEstado = (id, nuevoEstado) => {
    // {{REEMPLAZAR}}
  };

  // TODO(sesion-04) — Paso 4: implementa agregarTarea(e). Debe llamar a
  // e.preventDefault(), ignorar títulos vacíos, agregar una tarea nueva con
  // status "pendiente" usando setTasks([...tasks, ...]) y limpiar nuevoTitulo.
  const agregarTarea = (e) => {
    // {{REEMPLAZAR}}
  };

  const pendientes = tasks.filter((t) => t.status === 'pendiente');
  const enProgreso = tasks.filter((t) => t.status === 'en_progreso');
  const completadas = tasks.filter((t) => t.status === 'completada');

  return (
    <div className="board">
      <form onSubmit={agregarTarea}>
        <input
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <Column title="Pendiente" tasks={pendientes} onCambiarEstado={cambiarEstado} />
      <Column title="En progreso" tasks={enProgreso} onCambiarEstado={cambiarEstado} />
      <Column title="Completada" tasks={completadas} onCambiarEstado={cambiarEstado} />
    </div>
  );
}

export default Board;
