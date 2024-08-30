const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();
const taskRoutes = require("./routes/taskRoutes");
const healthRoutes = require("./routes/healthRoutes");

app.use(express.json());

app.use(cors());

app.use("/api/v1", taskRoutes);

app.use("/api/v1", healthRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
