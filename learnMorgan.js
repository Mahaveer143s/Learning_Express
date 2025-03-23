const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs= require('fs');

const path = require('path');
const app=express();

app.use(cors())
// app.use(morgan("dev"));
/*GET / 304 5.132 ms - -
GET /DMSans-Regular.ttf 404 4.234 ms - 157
This is the dev where its provide small describe */


// app.use(morgan('common'));
/*
127.0.0.1 - GET /api/users HTTP/1.1 200

"GET / HTTP/1.1" 200 39
::1 - - [23/Mar/2025:17:15:50 +0000] "GET /DMSans-Regular.ttf HTTP/1.1" 404 157
*/

// app.use(morgan('tiny'));
// GET /api/users 200



const logStream=fs.createWriteStream(path.join(__dirname,"access.txt"),{flag:"a"})
const errorStream=fs.createWriteStream(path.join(__dirname,"error.log"),{flag:"a"})
// app.use(morgan("combined",{stream:logStream}))

morgan.token("custom",(req,res)=>{
    return `User IP: ${req.ip}-${req.method} ${req.url} -Status: ${res.statusCode}`
})

app.use(morgan(':custom',{
    skip:(req,res)=>res.statusCode>=400,
    stream:logStream}));

app.use(morgan(':custom',{
    skip:(req,res)=>res.statusCode<=400,
    stream:errorStream}))

app.get('/',(req,res)=>{
    res.status(200)
    res.send("This is is learning morgan file update ");
})

app.listen(3000,()=>{
    console.log("Morgan learning server file ")
})