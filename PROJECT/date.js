const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'newFile.txt'), new Date().toString(), (err) => {
    if (err) throw err;
    console.log('Written');
});