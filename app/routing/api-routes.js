var friendsData = require('../data/friends.js');

console.log('API Routes Connected Successfully');

module.exports = function(app){
  app.get('/api/friends', function(req,res){
  res.json(friendsData);
});
  app.post('/api/friends', function (req, res) {

var friendsArray = req.body.scores;
var scoresArray = [];
var bestMatch = 0;

for(var i=0; i<friendsData.length; i++){
var scoresDiff = 0;
for(var j=0; j<friendsArray.length; j++){
scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(friendsArray[j])));
}
scoresArray.push(scoresDiff);
}

for(var i=0; i<scoresArray.length; i++){
if(scoresArray[i] <= scoresArray[bestMatch]){
bestMatch = i;
}}

var yourMatch = friendsData[bestMatch];
res.json(yourMatch);
friendsData.push(req.body);
});};