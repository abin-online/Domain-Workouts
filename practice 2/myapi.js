const express = require('express')
const app = express()

app.get('/api',((req,res)=>{
    //res.send('Hello world')
    res.json('Hello World')
}))


app.listen(3000, ()=>{
    console.log('Connected')
})