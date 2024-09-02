const swaggerAutogen = require("swagger-autogen")();
const host = require("../config/swagger.config");

console.log(host);

const doc = {
  info: {
    title: "simple backend",
    description: "Description",
  },
  host: host,
};

const outputFile = "./swagger/swagger_output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
