import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import useLocalStorage from '../hooks/useLocalStorage';

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-8 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <form onSubmit={addTask} className="flex gap-2 items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white shadow-sm"
        />
        <Button type="submit" variant="primary" className="transition-transform hover:scale-105">Add Task</Button>
      </form>

      <div className="flex gap-2 justify-center">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
          className={`rounded-full px-4 py-2 ${filter === 'all' ? 'shadow-md' : ''}`}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
          className={`rounded-full px-4 py-2 ${filter === 'active' ? 'shadow-md' : ''}`}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
          className={`rounded-full px-4 py-2 ${filter === 'completed' ? 'shadow-md' : ''}`}
        >
          Completed
        </Button>
      </div>

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center text-gray-400 dark:text-gray-500 py-8">
            <span className="text-lg">No tasks found for this filter.</span>
          </div>
        ) : (
          filteredTasks.map(task => (
            <Card key={task.id} className={`flex items-center justify-between transition-shadow hover:shadow-xl ${task.completed ? 'bg-green-50 dark:bg-green-900/30' : 'bg-white dark:bg-gray-800'}`}>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 accent-blue-500 transition-colors"
                />
                <span className={`transition-all duration-200 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}> 
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                onClick={() => deleteTask(task.id)}
                className="transition-transform hover:scale-110"
              >
                Delete
              </Button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager; 