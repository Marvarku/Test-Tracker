import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import PriorityFilter from './PriorityFilter';
import { TaskListContainer, NoTasksMessage } from './TaskListStyles';

const TaskList: React.FC = () => {
  const { state } = useTaskContext();
  const [filter, setFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');

  const filteredTasks = state.tasks.filter((task) =>
    filter === 'All' ? true : task.priority === filter
  );

  return (
    <div>
      <PriorityFilter onFilterChange={setFilter} />
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
