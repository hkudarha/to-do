import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import authReducer from './authSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
