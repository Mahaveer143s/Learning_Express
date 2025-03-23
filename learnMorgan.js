const express= require('express');
const morgan = require('morgan');

const app=express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("This is is learning morgan file ");
})

app.listen(3000,()=>{
    console.log("Morgan learning server file ")
})