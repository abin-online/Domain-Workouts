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





const express = require('express')
const app = express()

const middleware = ((req,res,next)=>{

    
    console.log('Connected')
    next()
})

app.use(middleware)

app.get('/', (req,res)=>{

    res.json('Hello World')
})

app.listen(3004, (req,res)=>{

    console.log('Server running on http://localhost:3004/')
})