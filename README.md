# Task Tracker Assessment

## Overview
This is a simple Task Tracker application built with **React**, **TypeScript**, and the **Context API**. The application allows users to manage tasks efficiently by adding, editing, deleting, filtering by priority, and reordering tasks via drag-and-drop functionality. Additionally, it features a search bar to filter tasks by title or description.

---

## Features

### Core Features
- **Task Management**: Add, edit, and delete tasks.
- **Priority Filter**: Filter tasks by priority (Low, Medium, High) using a dropdown menu.
- **Data Persistence**: Tasks persist in the browser's localStorage across refreshes.

### Bonus Features
- **Search Functionality**: Search tasks by title or description in real time.
- **Drag-and-Drop Reordering**: Reorder tasks using drag-and-drop, with the updated order saved in the state.

---

## Code Highlights
- **React Context API**: Used for global state management.
- **Functional Components and Hooks**: Built with modern React features like `useContext`, `useReducer`, `useEffect`, and `useState`.
- **Styled Components**: Clean and reusable styles with `styled-components`.

---

## Getting Started

### Prerequisites
- **Node.js** (>=16.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Marvarku/Test-Tracker.git
   cd Test-Tracker

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
    ```bash
    npm start

4. Open http://localhost:3000 to view the application in the browser.

### Running Tests
- To run unit tests, execute:
    ```bash
    npm test

### Building For Production
- To create a production build:
    ```bash
    npm run build

### Notes on Implementation
- State Management: The Context API is used for managing tasks and filters. Two contexts are provided:
   TaskContext (for tasks)
   FilterContext (for search and priority filters)
- Persistence: The localStorage API ensures that tasks are persisted across page reloads.
- Search and Filter Integration: The search and priority filter work seamlessly together, allowing real-time updates to the task list.