const path = require('path')
const fs = require('fs')

fs.writeFile(path.join(__dirname, 'new.txt'), new Date().toString(), (err)=>{
    if (err) throw err
    console.log('Writed')
})

