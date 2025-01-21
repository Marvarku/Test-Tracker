import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';
import { TaskItemContainer, TaskActionButton } from './TaskItemStyles';

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
      <h3>{task.title} ({task.priority})</h3>
      <p>{task.description}</p>
      <div>
        <TaskActionButton color="primary" onClick={handleEditClick}>Edit</TaskActionButton>
        <TaskActionButton color="danger" onClick={() => deleteTask(task.id)}>Delete</TaskActionButton>
      </div>

      {isEditing && (
        <TaskForm existingTask={task} onClose={handleCloseForm} />
      )}
    </TaskItemContainer>
  );
};

export default TaskItem;
