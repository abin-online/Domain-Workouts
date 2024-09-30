const fs = require('fs')

const path = require('path')


fs.stat(path.join(__dirname,'textFile.txt'), (err, data)=>{
    if(err) throw err
    console.log(data.size)
    console.log(data.isFile())
    console.log(data.isDirectory())
    console.log(data.birthtime)
})