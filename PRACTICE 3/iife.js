
(function(){
const counter = 0

function increment(){
    
    counter++
    console.log(counter)
}

function decrement(){
    
    counter--
    console.log(counter)
}

window.counterModule = {
    increment: increment,
    decrement: decrement
};
})();


counterModule.increment();
counterModule.decrement();
counterModule.increment();


