const path = require('path')
const fs = require('fs')

fs.rename(path.join(__dirname, 'files', 'start.txt'), path.join(__dirname, 'files', 'stop.txt'), (err) =>{
    if(err) throw err;
    console.log("RENAMED")
})