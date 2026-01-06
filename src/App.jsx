import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './styles/App.css'

function App() {
  // Usamos nuestro custom hook para persistencia
  const [tasks, setTasks] = useLocalStorage('TASKS_V1', [
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Configurar el proyecto', completed: true },
    { id: 3, text: 'Crear componentes', completed: false },
  ])

  // Estado para el filtro actual
  const [filter, setFilter] = useState('all')

  // Función para marcar/desmarcar completar
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Función para eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Función para actualizar el texto de una tarea
  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  // Función para añadir una nueva tarea
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Usamos el timestamp como ID único temporal
      text: text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // Lógica de filtrado (Estado derivado)
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true // 'all'
  })

  return (
    <div className='app-container'>
      <h1>Task Manager</h1>
      
      <TaskForm onAddTask={addTask} />
      
      <TaskFilter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
      />

      <div className="main-content">
        <div className="tasks-column">
          <TaskList 
            tasks={filteredTasks}
            onToggleComplete={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        </div>
        
        <div className="stats-column">
          <TaskStats tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default App
