let obj = {name: "Abin"}
let obj2 = {name: "Abin"}

let mySet = new Set(Object.entries(obj))

let wSet = new WeakSet()
wSet.add(obj2)

console.log(mySet);
console.log(wSet);
