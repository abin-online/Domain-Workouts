const express = require('express')

const path = require('path')

const app = express()

app.use((req,res,next)=>{
    console.log('start')
    next()
})

app.get('/',((req,res) =>{
    // res.send('hello')
    res.sendFile(path.join(__dirname,'sample.html'))
}))

app.get('/form',((req,res,next) =>{
    // res.send('hello')
    res.sendFile(path.join(__dirname,'form.html'))
    console.log('middle')
    next()
}))

app.use((req,res)=>{
    console.log('end')
})


app.post('/form', ((req,res) =>{
    res.send('account created')
}))

app.get('/about',((req,res)=>{
    res.send('about')
}))



app.listen(4000,()=>{

    console.log(__dirname)
    console.log(__filename)
    console.log("server started")
})

