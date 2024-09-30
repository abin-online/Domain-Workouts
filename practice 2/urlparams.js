const express = require('express')
const app = express()

app.get('/host' ,(req,res) =>{

    // res.send(req.query.name)
    res.json(req.query.name)

})


app.listen(3000, (req,res) =>{
    console.log('COnnected')
})