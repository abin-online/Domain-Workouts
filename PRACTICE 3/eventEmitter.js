const event = require('events')
const eventEmitter = new event.EventEmitter();

const connectHandler = function connected() {
    console.log('Connection Established');
    eventEmitter.emit('data_received')
};


eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
    console.log('Data TRansfer successfull')
})

eventEmitter.emit('connection');
console.log('Finished')