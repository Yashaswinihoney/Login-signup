const express = require('express');
const app= express();
const port= process.env.PORT || 3000;
const path= require('path');
const User = require('./../model/user')
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('./../db/conn')
const user=require('../model/user')
/*mongoose.connect('mongodb://localhost:27017/mDB',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
});*/


const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.use(bodyParser.json())

app.post('/api/register', async(req,res)=>{
    console.log(req.body);

    const { username, password:plainTextPassword }= req.body;

    const password = await bcrypt.hash(plainTextPassword,10)

    try{
      const response = await User.create({
        username,
        password
      })
      console.log('user created successfully',response)
    } catch(error){
      
      console.log(error)
      return res.json({ status:'error'})
    }
    
    res.json({status:'ok'})
})

//app.get('/',(req,res)=>{
  //  res.send('hello ');
//})

app.listen(4000,()=>{
    console.log("listening to the 4000");
})
