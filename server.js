// server.js

const express = require("express");
const app = express();
const port = 3002;
const taskRoutes = require("./routes/taskRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Use the task routes
app.use(taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
