
var mongodb = require("mongoose")
var uri = "mongodb:localhost/part9"
mongodb.connect('mongodb://127.0.0.1:27017/part9',{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log(err)
    }
})
var BookSchema = new mongodb.Schema({
    name:String,
    author:String,
    publishTime:Date

})

mongodb.model("Book",BookSchema)