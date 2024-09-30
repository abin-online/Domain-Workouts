const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'file.txt'), (err,data)=>{
    if(err) throw err
    let str = data.toString().split(" ")
    if(str.includes("you")){
        console.log('It is present')
    }else{
        console.log('It is not present')
    }
})

