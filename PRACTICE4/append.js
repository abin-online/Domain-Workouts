const path = require('path')
const fs = require('fs')


fs.appendFile(path.join(__dirname,'renamed.txt'), '\nAppended',(err) =>{

    if(err) throw err
    console.log('Appended')
})