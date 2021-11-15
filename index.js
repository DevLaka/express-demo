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

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about-me', (req, res) => {
    res.send('About Me Page');
});

//sample request: http://localhost:5000/posts/5?q=children
app.get('/posts/:postId', (req, res) => {
    const { postId } = req.params;
    const { q } = req.query;
    res.send(`You are reading a ${q} category post and id is ${postId}. Happy Reading`);
});

app.post('/details', (req, res) => {
    res.send('Post request');
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!")
    } else {
        res.send(`Search results for ${q}`)
    }
});

// Matches all requests
app.get('*', (req, res) => {
    res.send('Rounter is undefined');
});

// Starting the server
// The callback will run after starting the server
app.listen(7000, () => console.log("Listening on port 7000"));