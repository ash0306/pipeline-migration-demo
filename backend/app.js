const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// MongoDB connection
mongoose.connect("mongodb://localhost:27017")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
