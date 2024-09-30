const fs = require('fs');
const path = require('path')
const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'));
const writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

readableStream.pipe(writableStream);