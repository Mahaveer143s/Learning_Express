const express = require('express')
const morgan = require('morgan')
// const http = require('http') // this is not good for the production 

const app = express()

app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})