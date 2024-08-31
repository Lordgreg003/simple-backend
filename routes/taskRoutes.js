// routes/taskRoutes.js

const express = require("express");
const router = express.Router();
const {
  getTaskss,
  calculate,
  searchArray,
  getTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

router.get("/tasks", getTaskss);

// Define the POST /api/v1/calculate endpoint
router.post("/calculate", calculate);

// Define the GET /api/v1/set endpoint with a search query
router.get("/set", searchArray);

// CRUD operations
router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTaskById);
router.delete("/tasks/:id", deleteTaskById);

module.exports = router;
