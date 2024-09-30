const path = require('path')
const fs = require('fs')

fs.writeFile(path.join(__dirname, 'newFile.txt') ,"haii" ,(data, err) =>{
    if (err){
        throw err
    }

    console.log("writed")

})