const originalObject = { a: 1, b: 2 , b: {c:2}};
const shallowCopy = Object.assign({}, originalObject);

shallowCopy.b.c = 67

console.log(originalObject)

