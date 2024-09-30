const fs = require('fs')
const path = require('path')

const array = ["file1.txt", "file2.txt","file3.txt"]

array.forEach((Element)=>{

    fs.writeFile(path.join(__dirname ,Element), new Date().toString(), (err) =>{

        if(err) throw err

        console.log('printed')
    })

})
