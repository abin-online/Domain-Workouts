const person = {
    name: "Abin",
    age: 22,
    add: {
        city: "Kochi"
    }
}

const person1 = JSON.parse(JSON.stringify(person), (key, value)=>{

    if(typeof value === "object" && key !== null){
        return Object.freeze(value)
    }
    return value
})

console.log(person1)

person1.add.city = "TVM"

console.log(person1)

