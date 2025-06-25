import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        About Task Manager
      </h1>
      
      <div className="space-y-6">
        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Task Manager is designed to help you organize your daily tasks efficiently. 
            Our goal is to provide a simple yet powerful tool that helps you stay focused 
            and productive.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Create and manage tasks easily</li>
            <li>Mark tasks as completed</li>
            <li>Filter tasks by status</li>
            <li>Dark mode support</li>
            <li>Responsive design for all devices</li>
            <li>Local storage for data persistence</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Technology Stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>React.js for the frontend</li>
            <li>Tailwind CSS for styling</li>
            <li>React Router for navigation</li>
            <li>Local Storage for data persistence</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About; 