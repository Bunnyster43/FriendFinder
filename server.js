var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/api-routes.js'))(app);
require(path.join(__dirname, './app/routing/html-routes.js'))(app);

app.listen(PORT, function() {
console.log("App listening On PORT: " + PORT);
});