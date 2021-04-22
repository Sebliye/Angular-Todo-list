const mongoose=require('mongoose');
const Schema=mongoose.Schema
const todolistSchema=new Schema({
     todo:String,
     date:{
          type:Date,
          date:Date.now()
     }
})
module.exports=mongoose.model('todo',todolistSchema)