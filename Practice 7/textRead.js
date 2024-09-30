const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'textFile.txt'), (err,data)=>{
    if(err) throw err
    const str = data.toString().split(" ")
    if(str.includes("Are")){
        console.log('It is present')
    }else{
        console.log("It is not present")
    }
})

