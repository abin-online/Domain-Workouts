const path = require('path')
const fs = require('fs')


fs.unlink((path.join(__dirname), 'newFile.txt'), (err)=>{

    if (err) throw err;
    console.log('deletd')
})