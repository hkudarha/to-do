import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditClick = (task) => {
    setEditMode(task.id);
    setNewTitle(task.title);
  };

  const handleSaveClick = (id) => {
    dispatch(editTask({ id, newTitle }));
    setEditMode(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editMode === task.id ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button onClick={() => handleSaveClick(task.id)}>Save</button>
              <button onClick={() => setEditMode(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
