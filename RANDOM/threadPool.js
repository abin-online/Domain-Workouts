const fs = require('fs')
const path = require('path')

console.log('start')

fs.readFile(path.join(__dirname , 'file.txt' ) ,'utf-8' , (err , data)=> {
    if(err){
        console.log('Error occurred ' , err)
    }else {
        console.log( data , '\n File Readed')
    }
})
let i = 1000000000
while(i){
    i--
}
console.log('end')
