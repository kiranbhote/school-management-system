const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, School Management App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});