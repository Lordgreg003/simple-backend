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

// Function to handle POST /api/v1/calculate/1
const calculate = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({
      status: 400,
      message: "Invalid input",
    });
  }

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? (num1 / num2).toFixed(2) : "undefined";

  const response = {
    status: 200,
    addition: `The answer is ${addition}`,
    subtraction: `The answer is ${subtraction}`,
    multiplication: `The answer is ${multiplication}`,
    division: `The answer is ${division}`,
  };

  res.status(200).json(response);
};

module.exports = { getTasks, calculate };
