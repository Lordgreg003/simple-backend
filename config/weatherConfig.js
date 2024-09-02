// config/weatherConfig.js
const axios = require("axios");

const getWeatherData = async (ip) => {
  try {
    const apiKey = process.env.API_Key;

    // Log the API key to ensure it's being read correctly
    console.log("Using API Key: ", apiKey);

    // Log the IP to check if it's being passed correctly
    console.log("Fetching weather data for IP: ", ip);

    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: apiKey,
          q: ip,
        },
      }
    );

    // Log the response from Weather API
    console.log("Weather API Response: ", response.data);

    return response.data;
  } catch (error) {
    // Log the error message to see what's going wrong
    console.error("Error fetching weather data: ", error.message);
    throw error;
  }
};

module.exports = { getWeatherData };
