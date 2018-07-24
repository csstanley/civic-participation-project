const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;


// Middleware // 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku) //
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-COntrol-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-COntrol-Allow-Headers', 'Content-Type');
//   next()
// })

// ROUTES // 
// app.use(routes);

// Connect to the Mongo DB //
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/civicdb");

// Start the server //
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
