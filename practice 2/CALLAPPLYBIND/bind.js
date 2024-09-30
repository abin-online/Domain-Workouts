// function hello(){
//     console.log("Hi "+ this.name)
// }

// const person = {name: 'Abin'}

// const sayHello = hello.bind(person)

// sayHello()


// function hello(){
//     console.log("Hi " + this.name)
// }

// const person = {name: 'Abin'}

// const sayHEllo = hello.bind(person)
// sayHEllo()




function happy(){
    console.log('hi ' + this.name)
}

const person = {name : 'Abin'}

const sayHappy = happy.bind(person)
sayHappy()