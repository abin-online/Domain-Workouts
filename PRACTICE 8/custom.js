const express = require('express')
const app = express()

const middle = function(req,res,next){

    console.log('Connected')
    next()

}

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/index',(req,res)=>{
    res.write(req.query.name)
    res.end()
    
})

app.listen(3006, (req,res)=>{
    console.log(`App running on `)
})