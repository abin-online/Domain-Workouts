const path = require('path')
const fs = require('fs')


fs.appendFile(path.join(__dirname,'files','start12.txt'), '\n ON GOING', (err) =>{
    if(err) throw err;
    console.log("APPENDING COMPLETE")
})


process.on('uncaughtException' , (err) =>{
    console.log(`There was an ucaught error : ${err}`)
    process.exit(1)
})