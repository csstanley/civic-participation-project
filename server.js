const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;


// Middleware // 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku) //

app.use(express.static("client/build"));

app.get('/*', function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

// Start the server //
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
