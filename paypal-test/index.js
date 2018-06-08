/**
 * The app entry point
 */
var express = require('express');



const template_path = "/public";

var app = express();
app.use(express.static(__dirname + template_path));
var routes = require('./routes/router')(app);

app.listen(8080);