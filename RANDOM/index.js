const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req , res)=> {
    
    // const Person = {
    //     first: "Abin"
    // }
    // res.writeHead(200, {"Content-Type": "html"})
    // fs.createReadStream(path.join(__dirname , 'index.html')).pipe(res)

    if(req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('Podaaaaa')
    }else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        const Person = {
            name : 'Abin',
            age: 22
        }
        res.end(JSON.stringify(Person))
    }else{
        res.writeHead(404 , {'Content-Type': 'text/plain'})
        res.end('Page Not Found')
    }
});

server.listen(3000 , ()=> {
    console.log('Server running')
})