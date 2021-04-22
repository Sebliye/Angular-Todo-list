const express=require('express');

const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const todoroutes=require('./routes/todo.routes')
const app=express();

const db="mongodb://localhost:27017/todo"



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/todos',todoroutes)



mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
     app.listen(9000,console.log('listening to 3000 and connected to db'))
}).catch(err=>console.log(err));
