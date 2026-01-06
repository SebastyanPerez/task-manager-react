import TaskItem from './components/TaskItem'
import './styles/App.css'

function App() {
  
  return (
    <div className='app-container'>
      <h1>Task Manager</h1>
      <div className='task-list'>
        {/* Aquí se renderizarán los TaskItem */}
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  )
}

export default App
