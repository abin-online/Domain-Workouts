const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'newfile.txt'), 'utf8')
            console.log(data)
            console.log('READING COMPLETED')
        await fsPromises.writeFile(path.join(__dirname, 'files', 'bigfile.txt') , '\nAlapuzha' )
                console.log("Write completed")

        await fsPromises.appendFile(path.join(__dirname, 'newfile.txt'),'\n Kerala' )
        console.log('APPEND ALSO COMPLETED')
        
        await fsPromises.rename(path.join(__dirname,'newfile.txt'), path.join(__dirname, 'address.txt'))
            console.log("RENAMED")

        //deleting
        await fsPromises.unlink(path.join(__dirname, 'files', 'stop.txt'))
    }catch(err){
        console.log(err)
    }
}

fileOps()




process.on('uncaughtException' ,(err) =>{
    console.log(`There is an uncaught error: ${err}`)
    process.exit(1)
})