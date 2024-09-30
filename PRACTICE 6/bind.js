const Person = {
    name: "Abin",
    age: 22,
    greet: function(msg){
        console.log(`My name is ${this.name} and I am ${this.age} years old, ${msg}`)
    } 
}


const Person1 ={
    name: "Xavier",
    age: 22
}

const Print = Person.greet.bind(Person1, "Santhosham kond irikkan vayye")
Print()

Person.greet.apply(Person1, ['NI shooperaada'])

Person.greet.call(Person1, "Ada Mowne")

