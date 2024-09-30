const http = require('http')
http.createServer((req,res)=>{
    
    res.write('HELLO WORLD')
    console.log('connected')
    res.end()

}).listen(3003)


