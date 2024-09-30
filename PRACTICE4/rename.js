const path = require ('path')
const fs = require('fs')

fs.rename((path.join(__dirname),'newFile.txt'), (path.join(__dirname),'renamed.txt') , (err) =>{
    if(err) throw err
    console.log('Renamed')
})