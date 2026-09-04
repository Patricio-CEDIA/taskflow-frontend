import TaskCard from './TaskCard';

function Column({ title, tasks, onCambiarEstado }) {
  // Paso 2: borra el return de abajo y descomenta el bloque completo (el
  // .map() que dibuja un TaskCard por cada tarea).
  return (
    <div className="column">
      <h3>{title}</h3>
    </div>
  );

  // return (
  //   <div className="column">
  //     <h3>{title}</h3>
  //     {tasks.map((task) => (
  //       <TaskCard
  //         key={task.id}
  //         id={task.id}
  //         title={task.title}
  //         status={task.status}
  //         onCambiarEstado={onCambiarEstado}
  //       />
  //     ))}
  //   </div>
  // );
}

export default Column;
