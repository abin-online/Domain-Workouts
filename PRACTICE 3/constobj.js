const Person = {
    name : "abin",
    age: 22
}

//DEEP COPYING
const Person1 = {...Person}

const Person3 = JSON.parse(JSON.stringify(Person))

Person3.place = "Kerala"


console.log(Person);