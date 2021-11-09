// Importing express
const express = require("express");

// Create the express app by calling express
const app = express();

// Runs for every request that hits the server
// app.use((req, res) => {
//     console.log("A request hits the server");
//     //text response
//     // res.send("This is a text response!");
//     //json response
//     // res.send({ name: "Jhon" });
//     //html response
//     res.send('<h1> This is the html response </h1>');
// });

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about-me', (req, res) => {
    res.send('About Me Page');
});

app.post('/details', (req, res) => {
    res.send('Post request');
});

// Matches all requests
app.get('*', (req, res) => {
    res.send('Rounter is undefined');
});

// Starting the server
// The callback will run after starting the server
app.listen(5000, () => console.log("Listening on port 5000"));