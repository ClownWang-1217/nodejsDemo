var express = require('express');
var app = express();

/*app.get('/index',function(req,res)
{
	res.send('index');
});*/
app.use(express.static(__dirname),(req,res)=>{
	res.send('hellow')
});


app.listen(8081,function()
{
	console.log("开启index.js server!");
});