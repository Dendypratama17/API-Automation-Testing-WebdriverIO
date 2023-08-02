// app.js
const express = require('express');
const app = express();

app.use(express.json()); // Add this line to parse JSON data in requests

app.post('/template/upload', (req, res) => {
  const { title, document, type } = req.body;
  // Implement logic for handling the upload endpoint here
  // For this example, we'll just send a simple response
  res.status(200).json({ success: true, message: 'Upload successful' });
});

module.exports = app;