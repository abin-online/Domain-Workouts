
// deep copy

let arr1 = [1,2,3,34,4]
let arr2 = [...arr1]  

let arr3 = Object.assign([], arr1)
arr1[5] = 5

console.log(arr1);
console.log(arr1);