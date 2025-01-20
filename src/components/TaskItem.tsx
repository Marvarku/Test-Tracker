import React from 'react';
import { useTaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: { id: string; title: string; description: string; priority: 'Low' | 'Medium' | 'High' };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();

  return (
    <li>
      <h3>{task.title} ({task.priority})</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
