const Person = {name: "Abin",
age: 22,
add: {
    place:"Kerala"
    }
}


const Person1 =  JSON.parse(JSON.stringify(Person), (key, value) =>{

    if(typeof value === 'object' && key !== null){
       return  Object.freeze(value)
    }
 return value
})


Person1.add.place = 344

console.log(Person1)