const array = ["apple", "mango", "orange"]

const object = {name: "Abin", age: 22}

// for( let i of array){
//     console.log(i)
// }

for( let i in object){
    console.log(i + ":" + object[i])

}

console.log(Object.keys(object))
console.log(Object.entries(object).flat())


