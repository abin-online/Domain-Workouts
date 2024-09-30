function Person(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log(`My name is ${this.name} and I am ${this.age} years old`)
        }
    }
}

const Person1 = Person("Abin", 22)
Person1.greet()