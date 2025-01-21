import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppContainer, Header, Main } from './styles/AppStyles';

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
      <AppContainer>
      <GlobalStyles />
      <Header>
      <div className="App">
        <h1>Task Management</h1>
        </div>
        </Header>
        <Main>
        <button onClick={handleOpenForm}>Add New Task</button>
        
        {isTaskFormOpen && (
          <TaskForm onClose={handleCloseForm} />
        )}
        </Main>
        <TaskList />
      
      </AppContainer>
    </TaskProvider>
  );
}

export default App;
