//Modules required

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//App Creation
var app = express();

//App settings
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//DataBase Connections
console.log('Running Mongoose.js configuration');
require('./server/config/mongoose.js');

//Routes
var routes_setter = require('./server/config/routes.js');

//INVOKE
routes_setter(app);

app.listen(8000, function(){
    console.log('Listening on Port 8000');
})
