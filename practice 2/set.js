const arr = [1,1,2,2,3,4,5,6,6,7,10]

const A = new Set(arr)

A.add(8)  // addintg an element in a set

console.log(A.size)
console.log(A)

A.delete(10)
console.log(A)

if(A.has(2)){
    console.log(true)
}

