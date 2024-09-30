let array = ["apple", "orange", "banana"]

let mySet = new Set(array)


mySet.forEach(element => {
    console.log(element)
});

console.log(...array)
console.log(one, ...array)
console.log(...mySet)