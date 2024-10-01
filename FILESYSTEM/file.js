const { log } = require('console')
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname , 'file.txt' ) ,'utf-8' , (err , data)=> {
    if(err){
        console.log('Error occurred ' , err)
    }else {
        console.log( data , 'File Readed')
    }
})

fs.writeFile(path.join(__dirname , 'newFile.txt') , new Date().toString() , (err)=> {
    if(err){
        throw err
    }
    console.log('file writed')
})


fs.readFile(path.join(__dirname, 'fileTest.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    
    console.log(data); // Already a string since 'utf-8' is specified
    const cleanedData = data.replace(/"/g, '')
    const str = cleanedData.split(' '); // Split the string into an array of words
    console.log(str);
    
    if (str.includes('you')) {
        console.log(true); // Print true if 'How' is in the array
    } else {
        console.log(false); // Otherwise, print false
    }
});


