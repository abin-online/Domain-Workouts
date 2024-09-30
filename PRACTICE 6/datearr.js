const fs = require('fs')
const path = require('path')

const array = ['file1.txt',"file2.txt","file3.txt"]

array.forEach(element => {
    fs.readFile(path.join(__dirname,element ),  (err, data)=>{
        if (err) throw err
        let datas = data.toString()
        console.log(datas)
    })
    
});