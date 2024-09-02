// controllers/taskController.js
const taSkModel = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

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

const searchArray = (req, res) => {
  // Predefined array
  const animals = ["cat", "dog", "sheep", "goat", "cow"];

  // Extract the search query from the request
  const searchQuery = req.query.search;

  // Find the index of the search value
  const searchIndex = animals.indexOf(searchQuery);

  // If the value is found, return the index and value
  if (searchIndex !== -1) {
    res.status(200).json({
      message: "search was successful",
      Status: 200,
      Data: {
        search_index: searchIndex,
        search_value: searchQuery,
      },
    });
  } else {
    // If the value is not found, return an error message
    res.status(404).json({
      message: "Value not found in the array",
      Status: 404,
      Data: null,
    });
  }
};

const createTask = asyncHandler(async (req, res) => {
  try {
    const { title, description } = req.body;

    const titleTaken = await taSkModel.findOne({
      title: title.trim(),
    });

    if (titleTaken) {
      res.status(500).json({
        status: 500,
        message: "title already taken",
      });
      return;
    }

    const status = false;

    const newTask = await taSkModel.create({
      title: title.trim(),
      description: description.trim(),
      status: status,
    });

    if (!newTask) {
      res.status(500).json({
        status: 500,
        message: "failed to create new task",
      });
      return;
    } else {
      res.status(201).json(newTask);
    }
  } catch (error) {
    res.status(500);
  }
});

const getTaskById = asyncHandler(async (req, res) => {
  try {
    const check = await taSkModel.findById(req.params.id);

    console.log("check", check);
    if (!check) {
      res.status(500).json({
        status: 500,
        message: "id not found",
      });
      return;
    } else {
      res.status(200).json(check);
    }
  } catch (error) {
    res.status(500);
  }
});

const update = asyncHandler(async (req, res) => {
  const check = await taSkModel.findById(req.params.id);

  const { title, description, status } = req.body;
  try {
    if (!check) {
      res.status(500).json({
        status: 500,
        message: "id not found",
      });
      return;
    }
    const updatedTask = await taSkModel.findByIdAndUpdate(
      req.params.id,
      {
        description: description.trim(),
        title: title.trim(),
        status: status,
      },
      {
        new: true,
      }
    );
    if (!updatedTask) {
      res.status(500).json({
        status: 500,
        message: "task not updated",
      });
      return;
    } else {
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const deleteById = asyncHandler(async (req, res) => {
  const check = await taSkModel.findById(req.params.id);
  try {
    if (!check) {
      res.status(500).json({
        status: 500,
        message: "id not found",
      });
      return;
    }
    const deleteTask = await taSkModel.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      res.status(500).json({
        status: 500,
        message: "could not delete task",
      });
      return;
    } else {
      res.status(200).json(check);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getAllTasks = asyncHandler(async (req, res) => {
  const check = await taSkModel.find();

  try {
    if (!check) {
      res.status(500).json({
        status: 500,
        message: "tasks not found",
      });
      return;
    } else {
      res.status(200).json(check);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  getTasks,
  getAllTasks,
  calculate,
  searchArray,
  createTask,
  getTaskById,
  update,
  deleteById,
};
