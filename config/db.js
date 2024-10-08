const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", MONGO_URI); // Add this line to check the value

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
