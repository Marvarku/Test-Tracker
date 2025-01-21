import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { TaskFormContainer, Input, TextArea, FormActions } from './TaskFormStyles'; 

interface TaskFormProps {
  existingTask?: { id: string; title: string; description: string; priority: 'Low' | 'Medium' | 'High' };
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ existingTask, onClose }) => {
  const { addTask, editTask } = useTaskContext();
  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>(existingTask?.priority || 'Low');

  const handleSubmit = () => {
    if (existingTask) {
      editTask({ id: existingTask.id, title, description, priority });
    } else {
      addTask({ title, description, priority });
    }
    onClose();
  };

  return (
    <TaskFormContainer onSubmit={(e) => e.preventDefault()}>
      <Input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <TextArea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <FormActions>
        <button className="save" onClick={handleSubmit}>
          {existingTask ? 'Update Task' : 'Add Task'}
        </button>
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
      </FormActions>
    </TaskFormContainer>
  );
};

export default TaskForm;
