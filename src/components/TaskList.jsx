import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No se encontraron tareas en esta categoría.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
