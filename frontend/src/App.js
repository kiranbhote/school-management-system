import React from 'react';
import { FiUsers, FiSettings, FiBookOpen } from 'react-icons/fi';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar Navigation */}
      <div className="w-64 bg-white shadow-lg p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">ZeloSchool</h2>
        <nav className="space-y-4">
          <button className="w-full flex items-center text-left p-3 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            <FiUsers className="mr-3 text-xl" />
            <span className="text-gray-700">Students</span>
          </button>
          <button className="w-full flex items-center text-left p-3 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            <FiBookOpen className="mr-3 text-xl" />
            <span className="text-gray-700">Classes</span>
          </button>
          <button className="w-full flex items-center text-left p-3 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            <FiSettings className="mr-3 text-xl" />
            <span className="text-gray-700">Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Students</h2>
          <button className="px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400">
            + Add New Student
          </button>
        </div>

        {/* Filter Section */}
        <div className="flex items-center mb-4">
          <select className="p-2 md:p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>All Students</option>
          </select>
        </div>

        {/* Placeholder for Content */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <p className="text-gray-600">No student records available. Click "Add New Student" to get started.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
