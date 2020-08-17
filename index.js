var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var mongoose = require('mongoose');
var appRoutes = require('./routes/appRoutes');
mongoose.connect('mongodb://localhost/meanDb', {useNewUrlParser: true});

var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(appRoutes);

http.createServer(app).listen(port);
console.log('Server now running on port ', port);
