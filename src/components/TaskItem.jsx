
// src/components/TaskItem.jsx

// 1. "Props": Son los parámetros que recibe el componente. 
// En lugar de definir la tarea AQUÍ adentro, la recibimos desde afuera (del padre).
// Esto hace que el componente sea "reutilizable".
import { useState } from 'react';

// Recibimos la tarea y las funciones de acción como props
function TaskItem({ task, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Validación básica por si 'task' no existe aún
  if (!task) return null;

  const handleUpdate = () => {
    if (editText.trim()) {
      onUpdate(task.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggleComplete(task.id)}
        disabled={isEditing} // Desactivamos el checkbox mientras editamos
      />
      
      {isEditing ? (
        <input 
          type="text" 
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate} // Guarda al hacer clic fuera
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()} // Guarda al presionar Enter
          autoFocus
        />
      ) : (
        <span 
          className="task-text"
          onDoubleClick={() => setIsEditing(true)} // Doble clic para editar (pro!)
        >
          {task.text}
        </span>
      )}
      
      <div className="task-actions">
        <button 
          className="edit-btn"
          onClick={() => isEditing ? handleUpdate() : setIsEditing(true)}
        >
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
        
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

// Exportamos el componente para usarlo en App.jsx (u otros lados)
export default TaskItem;
