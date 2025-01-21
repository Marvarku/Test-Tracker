import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { TaskItemContainer, TaskActionButton } from './TaskItemStyles';

interface TaskItemProps {
  task: { id: string; title: string; description: string; priority: 'Low' | 'Medium' | 'High' };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();

  return (
    <TaskItemContainer>
      <h3>{task.title} ({task.priority})</h3>
      <p>{task.description}</p>
      <div>
        <TaskActionButton color="primary" onClick={() => console.log('Edit task')}>Edit</TaskActionButton>
        <TaskActionButton color="danger" onClick={() => deleteTask(task.id)}>Delete</TaskActionButton>
      </div>
    </TaskItemContainer>
  );
};

export default TaskItem;
