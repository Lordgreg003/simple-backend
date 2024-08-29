// routes/healthRoutes.js

const express = require("express");
const router = express.Router();
const { getHealth, postHealth } = require("../controllers/healthController");

// Define the GET /api/v1/health endpoint
router.get("/health", getHealth);

// Define the POST /api/v1/health endpoint
router.post("/health/create", postHealth);

module.exports = router;
