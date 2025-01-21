import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import TaskList from './TaskList';

describe('TaskList Component', () => {
  it('renders without crashing', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );
  });

  it('displays a no tasks message when there are no tasks', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
  });

  it('renders tasks when available', () => {
    const mockTasks = [
      { id: '1', title: 'Task 1', description: 'Test task', priority: 'High' },
    ];

    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
  });
});
