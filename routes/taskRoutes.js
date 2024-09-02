// routes/taskRoutes.js

const express = require("express");
const router = express.Router();
const {
  getTasks,
  calculate,
  searchArray,
  getAllTasks,
  createTask,
  getTaskById,
  update,
  deleteById,
} = require("../controllers/taskController");

router.get("/taskss", getTasks);

// Define the POST /api/v1/calculate endpoint
router.post("/calculate", calculate);

// Define the GET /api/v1/set endpoint with a search query
router.get("/set", searchArray);

// CRUD operations
router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", update);
router.delete("/tasks/:id", deleteById);

module.exports = router;
