const fs = require ('fs')
const path = require('path')


const read = fs.createReadStream(path.join(__dirname, 'stream.txt'), (err,data) =>{
    console.log('Read')
})