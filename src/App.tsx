import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import './App.css';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Task Tracker</h1>
        </header>
        <main>
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
};

export default App;
