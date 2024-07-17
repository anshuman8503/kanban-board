import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
    { id: '2', title: 'Task 2', description: 'Description 2', status: 'inProgress' },
  ],
  filter: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload || '';  // Ensure filter is always a string
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, editTask, setFilter, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;