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


//Table Reservation (DATA)
// =============================================================

var tableRes = [
  { 
  	name: "",
  	phoneNumber: "",
  	email: "",
  	uniqueID: ""
  }
];

var waitList = [
  { 
  	name: "",
  	phoneNumber: "",
  	email: "",
  	uniqueID: ""
  }
];

//Routes
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

	app.get("/api/tables", function(req, res) {
    	res.json(tableRes);
   	});

	app.get("/api/reserve", function(req, res) {
    	res.json(waitList);
   	});

   	// Create New Characters - takes in JSON input
	app.post("/api/tableRes", function(req, res) {
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
  		var newreservation = req.body;
	  	
  		console.log(newreservation);

  		if( tableRes.length <= 5 ){
  		tableRes.push(newreservation);
  		} else {
  		res.json(newreservation);
		}
	});

// Starts the server to begin listening
// =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
