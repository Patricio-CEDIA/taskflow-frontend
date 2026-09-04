import { useState, useEffect } from 'react';
import api from '../services/api';
import Column from './Column';

function Board() {
  const [tasks, setTasks] = useState([]);
  const [nuevoTitulo, setNuevoTitulo] = useState('');

  // Paso 2: borra la línea de abajo y descomenta cambiarEstado() completo.
  const cambiarEstado = () => {};
  // const cambiarEstado = (id, nuevoEstado) => {
  //   setTasks(tasks.map((t) => (t.id === id ? { ...t, status: nuevoEstado } : t)));
  // };

  // Paso 3: borra la línea de abajo y descomenta agregarTarea() completo.
  const agregarTarea = (e) => { e.preventDefault(); };
  // const agregarTarea = (e) => {
  //   e.preventDefault();
  //   if (!nuevoTitulo.trim()) return;
  //   setTasks([...tasks, { id: Date.now(), title: nuevoTitulo, status: 'pendiente' }]);
  //   setNuevoTitulo('');
  // };

  // Paso 5: borra la línea de abajo y descomenta el useEffect completo, que
  // carga las tareas reales desde la API al aparecer el tablero en pantalla.
  useEffect(() => {}, []);
  // useEffect(() => {
  //   api.get('/tasks').then((response) => setTasks(response.data.data));
  // }, []);

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
