const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const connectDB = require("./config/db");
connectDB();

console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

const taskRoutes = require("./routes/taskRoutes");
const healthRoutes = require("./routes/healthRoutes");

app.use(express.json());

app.use(cors());

app.use("/api/v1", taskRoutes);

app.use("/api/v1", healthRoutes);

// Error Middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//Not found URL middleware
app.use(notFound);

//Error handler for the whole app
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
