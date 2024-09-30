const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/employee')



const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const userModel = mongoose.model("users", userSchema)

app.get('/users', (req,res) =>{
    userModel.aggregate([{$match:{Dept: "IT"}}, {$group:{_id: null, AvgSalary: {$avg: "$Salary"}}}, {$project: {_id: 0}}]).then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})


app.listen(3001, ()=>{
  console.log('server is running ')
})