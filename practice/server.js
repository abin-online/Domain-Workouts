var http = require('http')


http.createServer((req,res) =>{
        res.write('Haiii')
        res.end()
    }).listen(3000)
