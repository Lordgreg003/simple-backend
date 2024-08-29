// controllers/healthController.js

// Function to handle GET /api/v1/health
const getHealth = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const response = {
    message: "ping successful",
    status: 200,
    data: "the API ping was successful",
  };

  res.status(200).json(response);
};

// Function to handle POST /api/v1/health
const postHealth = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      status: 400,
      message: "Invalid input",
    });
  }

  res.setHeader("Content-Type", "application/json");
  const response = {
    status: 201,
    message: "ping successful",
    data: `Your name is ${name} and you are ${age} years old`,
  };

  res.status(201).json(response);
};

module.exports = { getHealth, postHealth };
