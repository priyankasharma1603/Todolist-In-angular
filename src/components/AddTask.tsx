// src/components/AddTask.tsx
import React, { useState } from 'react';
import '../styles/App.css';

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText(''); // Clear the input field
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
