const { json } = require("body-parser")

const Person = {
    name: "Abin",
    age:22,
    address: {
        city: "Alapuzha"
    }
}

const Person1 = JSON.parse(JSON.stringify(Person), (key,value)=>{
    if(typeof value === 'object' && typeof value !== null){
        return Object.freeze(value)
    }
    return value
})

Person1.address.city = "Kochi"
console.log(Person1)