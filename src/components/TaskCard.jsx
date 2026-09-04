function TaskCard({ id, title, status, onCambiarEstado }) {
  const siguiente = {
    pendiente: 'en_progreso',
    en_progreso: 'completada',
    completada: null,
  };

  // Paso 3: borra el return de abajo y descomenta el bloque completo
  // (título + badge de estado + botón "Avanzar").
  return <div className="task-card">{title}</div>;

  // return (
  //   <div className="task-card">
  //     <h4>{title}</h4>
  //     <span className={`badge ${status}`}>{status}</span>
  //     {siguiente[status] && (
  //       <button onClick={() => onCambiarEstado(id, siguiente[status])}>
  //         Avanzar
  //       </button>
  //     )}
  //   </div>
  // );
}

export default TaskCard;
