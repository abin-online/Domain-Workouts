let weakSetObject = new WeakSet();
let objectOne = {};
let objectTwo = {};

// add(value)
weakSetObject.add(objectOne);
console.log("objectOne added");
weakSetObject.add(objectTwo);
console.log("objectTwo added");

// has(value)
console.log("WeakSet has objectTwo : " +
weakSetObject.has(objectTwo));

// delete(value)
weakSetObject.delete(objectTwo);
console.log("objectTwo deleted");
console.log("WeakSet has objectTwo : " +
weakSetObject.has(objectTwo));