// routes/taskRoutes.js

const express = require("express");
const router = express.Router();
const { getTasks, calculate } = require("../controllers/taskController");

router.get("/tasks", getTasks);

router.post("/calculate/create", calculate);

module.exports = router;
