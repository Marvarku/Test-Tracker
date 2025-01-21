import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Definition for types of Tasks and State
interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
}

interface TaskState {
  tasks: Task[];
}

interface TaskContextProps {
  state: TaskState;
  addTask: (task: Omit<Task, 'id'>) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TASK_ACTIONS = {
  ADD: 'ADD_TASK',
  EDIT: 'EDIT_TASK',
  DELETE: 'DELETE_TASK',
};

// Reducer function
function taskReducer(state: TaskState, action: any): TaskState {
  switch (action.type) {
    case TASK_ACTIONS.ADD:
      return { tasks: [...state.tasks, { ...action.payload, id: `${Date.now()}` }] };
    case TASK_ACTIONS.EDIT:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TASK_ACTIONS.DELETE:
      return { tasks: state.tasks.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
}
interface TaskProviderProps {
    children: React.ReactNode;
  }

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch({ type: TASK_ACTIONS.ADD, payload: JSON.parse(savedTasks) });
    }
  }, []);

  // Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (task: Omit<Task, 'id'>) => {
    dispatch({ type: TASK_ACTIONS.ADD, payload: task });
  };

  const editTask = (task: Task) => {
    dispatch({ type: TASK_ACTIONS.EDIT, payload: task });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: TASK_ACTIONS.DELETE, payload: id });
  };

  return (
    <TaskContext.Provider value={{ state, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for context
const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export { TaskProvider, useTaskContext };
