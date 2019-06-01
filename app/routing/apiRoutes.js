var friendData = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        console.log("Reading API");
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
      //setup variables for finding match
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        var bestMatch = 1000;
        var index = -1;

        for(var i = 0; i < friendData.length; i++){
            //Iterate through the whole list of friends already in database
            total = 0;

            for(var j = 0; j < newScore.length; j++){
                //for each friend calculate the total value
                var diff = Math.abs(newScore[j] - friendData[i].scores[j]);
                total += diff;
            }
            if(total < bestMatch){
                bestMatch = total;
                index = i;
            }
        }
        console.log('Best Match:', friendData[index]);
        friendData.push(newFriend);
        res.json(friendData[index]);
    });
};