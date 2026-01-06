import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registramos los elementos de Chart.js que vamos a usar
ChartJS.register(ArcElement, Tooltip, Legend);

function TaskStats({ tasks }) {
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  // Si no hay tareas, mostramos un mensaje en lugar del gráfico
  if (tasks.length === 0) {
    return (
      <div className="task-stats">
        <p>Añade tareas para ver tus estadísticas.</p>
      </div>
    );
  }

  const data = {
    labels: ['Completadas', 'Pendientes'],
    datasets: [
      {
        data: [completedCount, pendingCount],
        backgroundColor: [
          'rgba(100, 108, 255, 0.8)', // Color primario
          'rgba(255, 77, 77, 0.8)',   // Color danger
        ],
        borderColor: [
          'rgba(100, 108, 255, 1)',
          'rgba(255, 77, 77, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color de las etiquetas para modo oscuro
        },
      },
    },
  };

  return (
    <div className="task-stats">
      <h3>Progreso de Tareas</h3>
      <div style={{ maxWidth: '350px', margin: '0 auto', width: '100%' }}>
        <Pie data={data} options={options} />
      </div>
      <p style={{ marginTop: '1.5rem', color: '#888', fontSize: '1.1rem' }}>
        Total: {tasks.length} | {tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0}% completado
      </p>
    </div>
  );
}

export default TaskStats;
