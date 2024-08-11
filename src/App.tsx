// src/App.tsx
import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import LabelFilter from './components/LabelFilter';
import AddTask from './components/AddTask';
import './styles/App.css';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  labels: string[];
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Complete online JavaScript course', isCompleted: true, labels: ['Work'] },
    { id: 2, text: 'Jog around the park 3x', isCompleted: false, labels: ['Exercise'] },
    { id: 3, text: '10 minutes meditation', isCompleted: false, labels: ['Personal'] },
  ]);
  const [labels] = useState<string[]>(['Work', 'Exercise', 'Personal', 'Urgent']);
  const [selectedLabel, setSelectedLabel] = useState<string>('All');

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
      labels: [], // Start with no labels, user can add them later
    };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = selectedLabel === 'All'
    ? tasks
    : tasks.filter(task => task.labels.includes(selectedLabel));

  return (
    <div className="app">
      <header className="header">
        <h1>TODO</h1>
      </header>
      <AddTask onAddTask={addTask} />
      <div className="task-list">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            labels={task.labels}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <LabelFilter
        labels={['All', ...labels]}
        selectedLabel={selectedLabel}
        onSelectLabel={setSelectedLabel}
      />
    </div>
  );
};

export default App;
