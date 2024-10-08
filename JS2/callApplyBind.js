const Person = {
    name : 'Abin',
    age: 22,
    greet: function (msg) {
        console.log(`My name is ${this.name} and I am ${this.age} years old , ${msg}`)
    }
}

const Person1 = {
    name: 'Anu',
    age: 21
}

Person.greet.call(Person1 , 'Hello')

Person.greet.apply(Person1 , ['Hello'])

const invoke = Person.greet.bind(Person1 , 'Hello')
invoke()