function TaskCard({ id, title, status, onCambiarEstado }) {
  const siguiente = {
    pendiente: 'en_progreso',
    en_progreso: 'completada',
    completada: null,
  };

  // TODO(sesion-04): completa el JSX de la tarjeta. Debe mostrar el título,
  // el estado actual (span con className={`badge ${status}`}), y un botón
  // "Avanzar" que llame a onCambiarEstado(id, siguiente[status]) — solo si
  // siguiente[status] no es null (una tarea completada ya no avanza).
  return (
    <div className="task-card">
      {/* {{REEMPLAZAR}} */}
    </div>
  );
}

export default TaskCard;
