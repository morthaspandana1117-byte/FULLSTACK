require('dotenv').config();

const express = require('express');
const cors = require('cors');

const tasksRouter = require('./routes/tasks');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);
app.use('/notes', notesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.url} not found`,
  });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});