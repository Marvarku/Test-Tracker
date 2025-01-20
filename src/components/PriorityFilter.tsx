import React, { useState, useEffect } from 'react';

interface PriorityFilterProps {
  onFilterChange: (priority: 'All' | 'Low' | 'Medium' | 'High') => void;
}

const PriorityFilter: React.FC<PriorityFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
};

export default PriorityFilter;
