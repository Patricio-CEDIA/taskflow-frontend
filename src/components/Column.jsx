import TaskCard from './TaskCard';

function Column({ title, tasks, onCambiarEstado }) {
  return (
    <div className="column">
      <h3>{title}</h3>
      {/* TODO(sesion-04): recorre "tasks" con .map() y renderiza un <TaskCard />
          por cada una, pasando id, title, status y onCambiarEstado. No olvides
          la prop "key" con el id de la tarea. */}
    </div>
  );
}

export default Column;
