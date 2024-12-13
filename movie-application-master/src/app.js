// Import the required dependencies
const express = require("express");
const moviesService = require("./moviesService");
//const getRequestData = require("");

const app = express();
const morgan = require("morgan");
const router  = require("./movieRoutes");

// Define the port at which the application will run
const PORT = 5000;

app.use(morgan("combined"));

app.use("/movies", router)

  // Get all movies
  // Get a movie with specified id
  // Save movie details
  // Update a specific movie
  // Delete a specific movie
  // If no route present capture in the else part

  // listen to the server on the specified port
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
