import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authSlice';
import { toggleTheme } from './redux/themeSlice';
import './styles.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Advanced To-Do App</h1>
        <button onClick={handleThemeToggle}>
          Switch to {theme === 'light' ? 'Night' : 'Light'} Mode
        </button>
      </header>
      {!isAuthenticated ? (
        <button onClick={() => dispatch(login())}>Login</button>
      ) : (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <TaskInput />
          <TaskList />
        </>
      )}
    </div>
  );
};

export default App;
