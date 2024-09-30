const express = require('express')
const app = express()

const middle = function (req,res,next){
    console.log('Connected')
    next()
}

app.use(middle)

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(3009, (req,res)=>{
    console.log('App is running on http://localhost:3009/')
})


app.get('/home',(req,res)=>{
    res.send(req.query.name)
})

