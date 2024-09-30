function createPerson(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log(`My name is ${this.name} and ${this.age} years old`)
        }
    }
}

const person1 = createPerson("Abin", 22)

person1.greet()