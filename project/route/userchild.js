var express = require("express")
var app = express()
app.use('/',function(req,res){
    res.send('这是vip界面')
})
module.exports = app