// controllers/taskController.js

// Function to handle GET /tasks
const getTasks = (req, res) => {
  const response = {
    message: "retrieved successfully",
    status: 200,
    data: "the code works",
  };

  res.status(200).json(response);
};

module.exports = { getTasks };
