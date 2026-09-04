import { useState } from 'react';
import { mockTasks } from '../data/mockTasks';
import Column from './Column';

function Board() {
  const [tasks, setTasks] = useState(mockTasks);
  const [nuevoTitulo, setNuevoTitulo] = useState('');

  // Paso 3: borra la línea de abajo y descomenta cambiarEstado() completo.
  const cambiarEstado = () => {};
  // const cambiarEstado = (id, nuevoEstado) => {
  //   setTasks(tasks.map((t) => (t.id === id ? { ...t, status: nuevoEstado } : t)));
  // };

  // Paso 4: borra la línea de abajo y descomenta agregarTarea() completo.
  const agregarTarea = (e) => { e.preventDefault(); };
  // const agregarTarea = (e) => {
  //   e.preventDefault();
  //   if (!nuevoTitulo.trim()) return;
  //   setTasks([...tasks, { id: Date.now(), title: nuevoTitulo, status: 'pendiente' }]);
  //   setNuevoTitulo('');
  // };

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
