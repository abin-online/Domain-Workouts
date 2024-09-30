let obj1 = {firstName : "Abin", age: 22}

obj2 = {...obj1}



obj2.age = 25

obj3 = Object.assign({}, obj1)

obj3.age = 99

console.log(obj1);