const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
connectDB();

// importing swagger ui
const { readFileSync } = require("fs");
const swaggerUi = require("swagger-ui-express");

// Read the JSON file synchronously
const rawData = readFileSync("./swagger/swagger_output.json", "utf-8");
const swaggerFile = JSON.parse(rawData);

const taskRoutes = require("./routes/taskRoutes");
const healthRoutes = require("./routes/healthRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", taskRoutes);
app.use("/api", weatherRoutes);
app.use("/api/v1", healthRoutes);

//swagger inititailization
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Error Middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//Not found URL middleware
app.use(notFound);

//Error handler for the whole app
app.use(errorHandler);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
