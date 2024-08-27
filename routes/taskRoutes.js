// routes/taskRoutes.js

const express = require("express");
const router = express.Router();
const { getTasks } = require("../controllers/taskController");

// Define the GET /tasks endpoint
router.get("/tasks", getTasks);

module.exports = router;
