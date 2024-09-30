const EventEmitter = require('events')
//return the event emitter class

const emitter = new EventEmitter()

emitter.on('order-pizza' , (size , topping)=> {
    console.log(`Order received ! Baking a ${size} pizza with ${topping} `);  
})

emitter.on('order-pizz', (size)=> {
    console.log(`Pizza is very ${size}`);
    
})
console.log('It is not blocking ');

emitter.emit('order-pizza', 'large' , 'mushroom');
emitter.emit('order-pizz', 'small' , 'mushroom');



