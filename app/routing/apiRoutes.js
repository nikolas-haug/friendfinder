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

    //compare the new friend input with the existing friend score arrays
    function findBestFriend(user) {
        var userScores = user.scores;
        //the max difference in score between two users for each question is 4 - 10 questions total
        var maxDiff = 4 * 10;
        var newBestFriend;
        //loop through each friend
        for (var i = 0; i < friends.length; i++) {
            var friendScores = friends[i].scores;
            var totalDiff = 0;
            //loop through each score array separately
            for (var j = 0; j < friendScores.length; j++) {
                totalDiff = totalDiff + Math.abs(userScores[j] - friendScores[j]);
            }
            if (totalDiff <= maxDiff) {
                newBestFriend = friends[i];
                maxDiff = totalDiff;
            }
        }
        return newBestFriend;
    }

     // API POST Requests
     app.post("/api/friends", function(req, res) {
        //get the data from the new friend survey input
        var currentUser = req.body;
        //call the function to compare survey answers
        var bestFriend = findBestFriend(currentUser);
        //send the new best friend data as a response
        res.json(bestFriend);
        //add new friend to friends array
        friends.push(currentUser);
        console.log(bestFriend);
    });
}