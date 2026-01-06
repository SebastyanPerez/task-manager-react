// src/components/TaskItem.jsx

function TaskItem() {
  // Por ahora usaremos datos "estáticos" (quemados) para ver cómo luce
  const task = {
    text: "Aprender los fundamentos de React",
    completed: false
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} readOnly />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className="delete-btn">Eliminar</button>
    </div>
  );
}

export default TaskItem;