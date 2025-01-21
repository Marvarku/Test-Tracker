import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { TaskItemContainer, TaskHeader, TaskTitle, PriorityBadge, TaskDescription, TaskActions, TaskActionButton } from './TaskItemStyles';

interface TaskItemProps {
  task: { id: string; title: string; description: string; priority: 'Low' | 'Medium' | 'High' };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();

  return (
    <TaskItemContainer>
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <PriorityBadge priority={task.priority}>{task.priority}</PriorityBadge>
      </TaskHeader>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskActions>
        <TaskActionButton color="primary" onClick={() => console.log('Edit task')}>
          Edit
        </TaskActionButton>
        <TaskActionButton color="danger" onClick={() => deleteTask(task.id)}>
          Delete
        </TaskActionButton>
      </TaskActions>
    </TaskItemContainer>
  );
};

export default TaskItem;
