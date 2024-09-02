// controllers/weatherController.js
const { getWeatherData } = require("../config/weatherConfig");

const getHelloResponse = async (req, res) => {
  const visitorName = req.query.visitor_name;

  if (!visitorName) {
    return res.status(400).json({ error: "Visitor name is required" });
  }

  try {
    // Retrieve client IP address from request headers
    const clientIP =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // Fetch weather data using the helper function
    const weatherData = await getWeatherData(clientIP);

    // Extract city and temperature information
    const city = weatherData.location.name;
    const temperature = weatherData.current.temp_c;

    // Create a greeting message
    const greeting = `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${city}.`;

    // Response object
    const response = {
      client_ip: clientIP,
      location: city,
      greeting: greeting,
    };

    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
};

module.exports = { getHelloResponse };
