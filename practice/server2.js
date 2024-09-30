var http = require('http')
var fs = require('fs')
var url = require('url')
const { log } = require('console')

http.createServer((req,res) =>{

    var q = url.parse(req.url, true)

    console.log(q.pathname)

    if(q.pathname ==='/'){
        fs.readFile('sample.html', ((err,data) =>{

            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }))

    }else if(q.pathname === '/form'){

        fs.readFile('form.html', ((err,data) =>{

            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }))

    }else if (q.pathname === '/f'){

        console.log(q.query.firstName)
        res.write('<h1>'+q.query.firstName+'</h1>')
        res.end()
    }else{
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('error')
        res.end()
    }

    
}).listen(7001, ()=>{
    console.log('server started')
})

