var mongoose = require("mongoose")
require("./module_mongoose")

var Book = mongoose.model("Book")

var book = new Book({
    name:"wangtao",
    author:"Awangtao",
    publishTime:new Date()

})

book.save(function(err,doc){
    console.log("doc>>>>>>>>>>>>>>>>>>"+doc)
})
