const fs = require ('fs')
const path = require('path')



const array = ['text1.txt', "text2.txt", "text3.txt"]




array.forEach(element => {
    fs.writeFile(path.join(__dirname, element), "Hi" ,(err) =>{
        if(err) throw err
        console.log('Writed')
    
    }) 


});

