import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validación: No agregar tareas vacías o solo con espacios
    if (!text.trim()) {
      alert("¡Escribe algo primero!");
      return;
    }

    // Llamamos a la función que nos pasó el padre
    onAddTask(text);

    // Limpiamos el input
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
