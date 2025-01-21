


import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';
import { TaskItemContainer, TaskHeader, TaskTitle, PriorityBadge, TaskDescription, TaskActions, TaskActionButton } from './TaskItemStyles';

interface TaskItemProps {
  task: { id: string; title: string; description: string; priority: 'Low' | 'Medium' | 'High' };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };
  return (
    <TaskItemContainer>
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <PriorityBadge priority={task.priority}>{task.priority}</PriorityBadge>
      </TaskHeader>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskActions>
      <TaskActionButton color="primary" onClick={handleEditClick}>Edit</TaskActionButton>
          
        <TaskActionButton color="danger" onClick={() => deleteTask(task.id)}>
          Delete
        </TaskActionButton>
      </TaskActions>
      {isEditing && (
        <TaskForm existingTask={task} onClose={handleCloseForm} />
      )}
    </TaskItemContainer>
  );
};

export default TaskItem;
