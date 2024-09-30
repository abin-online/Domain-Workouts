// const http = require('http')

// http.createServer((req, res) =>{ 
//     console.log('Connected')
// }).listen(7000)


const http = require('http');

const server = http.createServer((req, res) => { 
    console.log('Connected');
});

server.on('error', (error) => {
    console.error('Server error:', error);
});

server.listen(3000);
