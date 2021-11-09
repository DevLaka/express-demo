// Importing express
const express = require("express");

// Create the express app by calling express
const app = express();

// Runs for every request that hits the server
app.use(()=> console.log("A request hits the server"));

// Starting the server
// The callback will run after starting the server
app.listen(5000, () => console.log("Listening on port 5000"));