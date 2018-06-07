var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initialize express and ports
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import the html and api routes from other js files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//listen for the server to start
app.listen(PORT, function() {
    console.log("server is listening on " + PORT);
});