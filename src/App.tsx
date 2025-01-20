import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);

  const handleCloseForm = () => {
    setTaskFormOpen(false);
  };

  const handleOpenForm = () => {
    setTaskFormOpen(true);
  };

  return (
    <TaskProvider>
      <GlobalStyles />
      
      <div className="App">
        <h1>Task Management</h1>
        
        <button onClick={handleOpenForm}>Add New Task</button>
        
        {isTaskFormOpen && (
          <TaskForm onClose={handleCloseForm} />
        )}
        
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
