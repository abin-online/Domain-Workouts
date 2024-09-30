const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'files', 'bigfile.txt'), ' mudinch ',(err) =>{
    if(err) throw err;
    console.log('WRITE COMPLETE')
})


process.on('uncaughtException' , (err) =>{
    console.error(`There was an uncaught error : ${err}`)
    process.exit(1)
})