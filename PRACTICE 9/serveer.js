const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/index',(req,res)=>{
    res.send('Hello world') 
})


app.listen(3000,function(err){
    if(err) console.log('Error')
    else(console.log('Server running at http://localhost:3000'))
})

app.use((req,res,err)=>{
    res.send('Page Not found')
})