function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'pending', label: 'Pendientes' },
    { id: 'completed', label: 'Completadas' }
  ];

  return (
    <div className="task-filter">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={currentFilter === filter.id ? 'active' : ''}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
