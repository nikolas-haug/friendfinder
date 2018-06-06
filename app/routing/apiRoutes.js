var bodyParser = require("body-parser");
var path = require("path");

//import the friends api data
var friends = require("../data/friends.js");

module.exports = function(app) {
    //route to get the json api friend data
    app.get("/api/friends", function(req, res) {
        // console.log(friends);
        return res.json(friends);
    });
    // route to add to the json data array
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
    });
}