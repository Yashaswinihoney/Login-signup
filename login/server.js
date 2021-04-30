const express = require('express')
const path= require('path')
const app=express()
const http=require('http')
const port =process.env.port || 5000;

/*app.get('/',(req,res)=>{
    res.send('hellooo')
})*/
const staticPath=path.join(__dirname,"../public")

app.use(express.static(staticPath));
//console.log(__dirname)
//console.log(path.join(__dirname,"../public"));

app.listen(port,()=>{
    console.log("server upp and running at "+port);
})