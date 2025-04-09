// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect('https://github.com/jacobRobles/ClimateProject.git')
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect('https://github.com/Kiwi-tec/typesetting.git')
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://github.com/Kiwi-tec/Sorting-algorithms.git')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});