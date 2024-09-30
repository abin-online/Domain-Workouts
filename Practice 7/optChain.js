//optional chaining

const Person = {
    name: "Abin",
    age:22,
    address: {
        city: "Kochi"
    }
}

const result = Person.address?.pin

console.log(result)