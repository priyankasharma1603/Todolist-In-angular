// src/components/TaskItem.tsx
import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/App.css';

interface TaskItemProps {
  id: number;
  text: string;
  isCompleted: boolean;
  labels: string[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, isCompleted, labels, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <Checkbox checked={isCompleted} onChange={() => toggleComplete(id)} />
      <span>{text}</span>
      <div className="labels">
        {labels.map((label, index) => (
          <span key={index} className="label">{label}</span>
        ))}
      </div>
      <IconButton onClick={() => deleteTask(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TaskItem;
