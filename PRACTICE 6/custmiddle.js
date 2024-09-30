const express = require('express')
const app = express()



const middle = function(req,res,next){
    console.log('this is a custom middleware')
    next()
}

app.use(middle)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3009, (req,res)=>{
    console.log('Server running on http://localhost:3009/')
})

// const express = require('express')
// const app = express()

// const middle = ((req,res, next) =>{
//     console.log('Ith njan undakkiya middleware. ')
//     next()
// })

// app.use(middle)

// app.get('/', (req, res) =>{
//     res.json('Hello World')
// })

// app.listen(3003, ()=>{
//     console.log('Server is running on http://localhost:3003/ ')
// })

