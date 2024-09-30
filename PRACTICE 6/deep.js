const Person = {
    name: "Abin",
    age: 22,
    add: {
        place: "Kochi"
    }
}




const Person1 = JSON.parse(JSON.stringify(Person), (key, value) =>{
    if (typeof value === 'object' && value !== null){
        return Object.freeze(value)
    } 
    return value
})

Person1.add.place = "Chennai"





console.log(Person1)


