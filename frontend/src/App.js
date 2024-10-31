import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const API_URL = "https://school-management-system-lt3h.onrender.com/";
  const [heading, setHeading] = useState('');
  const [headings, setHeadings] = useState([]);

  const handleAddHeading = () => {
    if (heading.trim()) {
      setHeadings([...headings, heading]);
      setHeading('');
    }
  };

    // Function to clear all headings
  const handleClearHeadings = () => {
    setHeadings([]);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Container for main content */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        {/* App Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-800">School Management App</h1>

        {/* Input Section */}
        <div className="flex items-center mb-6">
          {/* Input for Heading */}
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter a heading..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Button to Add Heading */}
          <button
            onClick={handleAddHeading}
            className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>

        {/* Display List of Headings */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Saved Headings</h2>
          <div className="space-y-3">
            {headings.map((heading, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-800">{heading}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button to Clear Headings */}
        <button
          onClick={handleClearHeadings}
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Clear Headings
        </button>
      </div>
    </div>
  );
}

export default App;
