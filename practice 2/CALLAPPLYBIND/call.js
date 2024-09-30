// function hello(){
//     console.log('Hello'+ " " +this.name)
// }
//  const person = {name: 'Logesh', Age:22}
// hello.call(person)


// function Hello(){
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
// }

// const person = { name: 'Abin', age: '22'}


// Hello.call(person)

function hello(){
    console.log('Hi ' + this.name+ this.age)
}

const person = {name: 'Sathish',age:22}

hello.call(person)