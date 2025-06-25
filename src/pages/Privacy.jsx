import React from 'react';
const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12">
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-extrabold mb-6 border-b pb-2 text-blue-700 dark:text-blue-300">
        Privacy Policy
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Your privacy is important to us. This page explains how we handle your information.
      </p>
      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
        <li>We do not collect personal information unless you provide it voluntarily (e.g., via the contact form).</li>
        <li>Your data is stored locally in your browser and is not shared with third parties.</li>
        <li>We use cookies only for essential app functionality.</li>
        <li>You can contact us at any time to request deletion of your data.</li>
      </ul>
      <p className="text-gray-500 text-sm border-t pt-4">Last updated: June 2025</p>
    </div>
  </div>
);
export default Privacy; 