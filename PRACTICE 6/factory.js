//factory function

function createPerson(name, age){
    return{
        name: name,
        age: age,
        greet: function(){
            console.log(`My name is ${this.name} and I am ${this.age} years old`)
        } 
    }
}

const Person = createPerson("Abin", 22)
Person.greet()

console.log(Person)

