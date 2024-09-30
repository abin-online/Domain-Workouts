const Person = {
    name: "Abin",
    age:22,
    print: function(msg){
        console.log(`My name is ${this.name} and I am ${this.age} years old ${msg}`)
    }
}

const Person1 = {
    name: "Bibin",
    age: 22
}


Person.print.apply(Person1 , ["Haiii"])

