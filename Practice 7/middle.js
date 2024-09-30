const express = require('express')
const app = express()

const middle = function(req,res,next){
    console.log('Connected')
    next()
}


app.get('/home', (req,res)=>{
    res.send('Haiiiii')
})


app.get('/index', (req,res)=>{
    res.send(req.query.name)
})

app.listen(3012, (req,res)=>{
    console.log('Server connected on http://localhost:3012/')
})