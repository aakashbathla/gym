// import useState and React from 'react' 
import React, { useState } from 'react';

//create Task interface with properties title and completed
interface Task {
  title: string;
  completed: boolean; 
}

// create app component
const App: React.FC = () => {
  // create tasks state with type Task[]
  const [tasks, setTasks] = useState<Task[]>([]);

  // create title state with type string
  const [title, setTitle] = useState<string>('');

  // create addTask function
  const addTask = () => {
    // create newTask object with title and completed properties
    const newTask = {
      title,
      completed: false
    };

    // set tasks state to include newTask
    setTasks([...tasks, newTask]);

    // reset title state
    setTitle('');
  };

  // create toggleTaskCompleted function
  const toggleTaskCompleted = (index: number) => {
    // create newTasks array with all tasks
    const newTasks = [...tasks];

    // update completed property of task at index
    newTasks[index].completed = !newTasks[index].completed;

    // set tasks state to newTasks
    setTasks(newTasks);
  };

  // create removeTask function
  const removeTask = (index: number) => {
    // create newTasks array with all tasks except task at index
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];

    // set tasks state to newTasks
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Add a task"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <div
              className="task-title"
              style={{ textDecoration: task.completed ? 'line-through' : '' }}
              onClick={() => toggleTaskCompleted(index)}
            >
              {task.title}
            </div>
            <button className="button" onClick={() => removeTask(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};