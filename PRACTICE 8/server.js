const http = require('http')
http.createServer((req,res)=>{
    res.write('Hello')
    res.end()
    console.log('Server connected')
}).listen(3009)