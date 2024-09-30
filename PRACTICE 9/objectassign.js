const person = {
    name:"Abin",
    location: {
        city: "Chennai"
    }
}

const person1 = Object.assign( person , {first: 1 , second : 2})

person1.name = "Mk"

console.log(person)
console.log(person1);