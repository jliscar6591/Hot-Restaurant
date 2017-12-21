//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Ports and express app set up
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//Handles data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  