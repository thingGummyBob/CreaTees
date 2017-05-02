//app folder has all our backend stuff
//public folder has all our front-end stuff
//model how data goes in data base

var express    = require('express');
var morgan     = require('morgan');
var mongoose   = require('mongoose'); // handler for mongo
mongoose.Promise = require('bluebird');
var bodyParser = require('body-parser');  //body parse is express middle ware. parses body into json
var path       = require('path')
var port = process.env.PORT || 8080; //for shiz like heroku 
// var User = require('./app/models/user'); // now can access user.js file
var router     = express.Router();
var appRoutes  = require('./app/routes/api')(router);
var app = express();

// all this is middle ware
app.use(morgan('dev')); // logs every request 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public')); //giving acces to all front-end views
app.use('/api', appRoutes) //we use api beacuse we want to differentiate our backend routes

mongoose.connect('mongodb://localhost:27017/creaTees', function(err){
	if(err){
		console.log('db nai chal rai' + err);
		throw err; // crashes server
	}
	else {
		console.log('db connected');
	}
});

// app.get('/', function(req,res){
// 	res.send('just ');
// }) 

app.get('*', function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
}) 



app.listen(port, function(){ 	
	console.log('Server started on port: '+ port)
});


// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var multer = require('multer')
// var path = require("path");
// var uuid = require("uuid");
