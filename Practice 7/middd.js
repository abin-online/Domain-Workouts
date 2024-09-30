const express = require('express')
const app = express()

const middleWare = function(req, res, next){

    console.log('Connected')
    next()

}

app.get('/',(req,res)=>{
    res.send('Write')
})


app.listen(3008, (req,res)=>{
    console.log('Server running on port http://localhost:3008/')
})