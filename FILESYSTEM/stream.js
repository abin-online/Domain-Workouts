const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.join(__dirname , 'streamFile.js') , {
    encoding: 'utf-8'
})

