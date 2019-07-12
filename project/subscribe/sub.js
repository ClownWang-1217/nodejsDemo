var redisClient = require("../redis/redisClient")

redisClient.subscribe('testPublish')
redisClient.on('message',(channel,message)=>{
    console.log('channel : '+channel  + 'message: ' + message)
})
