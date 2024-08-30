// routes/taskRoutes.js

const express = require("express");
const router = express.Router();
const {
  getTasks,
  calculate,
  searchArray,
} = require("../controllers/taskController");

router.get("/tasks", getTasks);

// Define the POST /api/v1/calculate endpoint
router.post("/calculate", calculate);

// Define the GET /api/v1/set endpoint with a search query
router.get("/set", searchArray);

module.exports = router;
