var express = require('express');

//var router = express.Router();

var app = express();
app.all('/index',function(req,res)
{
	res.sendFile(__dirname + '/index.html');
});

app.use('/vip',require("./userchild"));

module.exports = app;