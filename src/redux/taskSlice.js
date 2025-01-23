import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, newTitle } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = newTitle;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
