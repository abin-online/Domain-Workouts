const express = require('express')

const app = express()

app.get('/host', ((req,res) =>{
    res.json(req.query.name)
}))

app.listen(3000, (req,res)=>{
    console.log('connected')
})