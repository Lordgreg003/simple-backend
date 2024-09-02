// routes/weatherRoutes.js
const express = require("express");
const router = express.Router();
const { getHelloResponse } = require("../controllers/weatherController");

// Define the route and use the controller function
router.get("/hello", getHelloResponse);

module.exports = router;
