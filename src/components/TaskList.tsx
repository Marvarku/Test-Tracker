import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import PriorityFilter from './PriorityFilter';

const TaskList: React.FC = () => {
  const { state } = useTaskContext();
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');

  const filteredTasks = state.tasks.filter((task) =>
    filter === 'All' ? true : task.priority === filter
  );

  return (
    <div>
      <PriorityFilter onFilterChange={setFilter} />
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
