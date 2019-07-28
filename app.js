const express = require('express');
const app = express();

const path = require('path')

//body parser middleware
app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(3000,()=>{
    console.log(3000)
})