//In JavaScript, this keyword refers to the current
// context or scope within which code is executing.
// Its value is determined by how a function is called,
// and it can dynamically change depending on the
// invocation context.


//this example code 


const person = {
    name: "Abin",
    age: 22,
    sayHello : greet
}

function greet(){
    console.log("Hello, my name is "+ this.name)
}


greet() //this refers to global object
greet.call(person) // this refers to person object
person.sayHello() //  " "
