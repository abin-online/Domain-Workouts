
// const nestedArray = [[1, 2], [3, 4,], [5, 6]];


// const flattenedArray = nestedArray.flatMap(innerArray => innerArray);

// console.log(flattenedArray); 

const array = [1,2,3,4,4,5,5]

const flatted = array.flatMap((x)=> x*3)

console.log(flatted)