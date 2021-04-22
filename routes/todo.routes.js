const express=require('express');
const todos=require('../model/todo.model');
const routes=express.Router();


routes.get('/',(req,res)=>{
     todos.find()
    .then(val=>{
         console.log(val)
         res.send('hello found you')
    }).catch(err=>console.log(err))

console.log('hello get is ')
})

routes.post('/',(req,res)=>{
   
     let newtodo=new todos(req.body)
     newtodo.save()
     .then(val=>console.log(val +000000))
     .catch(err=>console.log(err))
})

module.exports=routes