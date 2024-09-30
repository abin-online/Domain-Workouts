let arr1 = [1,2,3,4,5];
let arr2 = arr1;
arr2[2] = 100;
console.log(arr1);

//shallow copy

let obj1 = {firstName : "Abin", age: 22}

obj2 = obj1

obj2.age = 25

console.log(obj1);