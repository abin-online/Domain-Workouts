const fs = require('fs')
const path = require('path')

const array = ['start1.txt','start2.txt','start3.txt']

array.forEach(element => {

    fs.writeFile(path.join(__dirname, element ), new Date().toString() , (err) =>{
        if(err) throw err
        else {
            console.log('written successfully')
        }
    })
            
});


