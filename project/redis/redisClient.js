var config = require("../config")
var redis = require("redis")

var redisClient = redis.createClient(config.redis.port,config.redis.ip)
module.exports = redisClient
redisClient.on("ready", function (err) {  
    console.log("ready :" , "yes"); //链接成功检测
}); 
redisClient.on("error", function (err) {  
    console.log("Error :" , err);  //错误检测
});


