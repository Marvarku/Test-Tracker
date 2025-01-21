import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  it('renders a task with title and description', () => {
    const task = { id: '1', title: 'Task 1', description: 'Description', priority: 'Low' };

    render(
      <TaskProvider>
        <TaskItem task={{
                id: '',
                title: '',
                description: '',
                priority: 'Low'
            }} />
      </TaskProvider>
    );

    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
  });

  it('calls deleteTask when delete button is clicked', () => {
    const task = { id: '1', title: 'Task 1', description: 'Description', priority: 'Low' };
    const deleteTaskMock = jest.fn();

    render(
      <TaskProvider>
        <TaskItem task={{
                id: '',
                title: '',
                description: '',
                priority: 'Low'
            }}  />
      </TaskProvider>
    );

    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);
    expect(deleteTaskMock).toHaveBeenCalledWith('1');
  });
});
