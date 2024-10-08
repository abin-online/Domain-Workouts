const fs = require('fs')
const path = require('path')
const zlib = require('zlib');

const gzip = zlib.createGzip()
const readableStream = fs.createReadStream(path.join(__dirname , 'streamFile.txt') , {
    encoding: 'utf-8',
    highWaterMark: 12
})

const writableaStream = fs.createWriteStream(path.join(__dirname , 'streamFile1.txt'))

// readableStream.on('data' ,(chunk)=> {
//     console.log(chunk)
//     writableaStream.write(chunk)
// })

readableStream.pipe(gzip).pipe(fs.WriteStream(path.join(__dirname , 'fileGzip')))