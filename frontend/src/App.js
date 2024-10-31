import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const API_URL = "https://school-management-backend.onrender.com";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
}

export default App;