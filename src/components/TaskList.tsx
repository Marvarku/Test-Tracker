import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import PriorityFilter from './PriorityFilter';
import { TaskListContainer, NoTasksMessage, SearchBar } from './TaskListStyles';

const TaskList: React.FC = () => {
  const { state } = useTaskContext();
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = state.tasks.filter((task) =>
    (filter === 'All' || task.priority === filter) &&
    (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <PriorityFilter onFilterChange={setFilter} />
      <SearchBar
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TaskListContainer>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <NoTasksMessage>No tasks found</NoTasksMessage>
        )}
      </TaskListContainer>
    </div>
  );
};

export default TaskList;
