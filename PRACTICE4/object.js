const originalObject = { a: 1, b: 2 , b: {c:2}};
const shallowCopy = JSON.parse(JSON.stringify(originalObject))

shallowCopy.a = 67

console.log(originalObject)