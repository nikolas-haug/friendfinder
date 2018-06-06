var bodyParser = require("body-parser");
var path = require("path");

//import the friends api data
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
}