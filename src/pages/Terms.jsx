import React from 'react';
const Terms = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12">
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-extrabold mb-6 border-b pb-2 text-blue-700 dark:text-blue-300">
        Terms of Service
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Welcome to our Terms of Service page. Please read these terms carefully before using our application.
      </p>
      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
        <li>By using this app, you agree to comply with all applicable laws and regulations.</li>
        <li>Your use of the app is at your own risk. We provide the app "as is" without warranties of any kind.</li>
        <li>We reserve the right to update these terms at any time without notice.</li>
        <li>Do not misuse the app or attempt to access it in unauthorized ways.</li>
        <li>Contact us if you have any questions about these terms.</li>
      </ul>
      <p className="text-gray-500 text-sm border-t pt-4">Last updated: June 2025</p>
    </div>
  </div>
);
export default Terms; 