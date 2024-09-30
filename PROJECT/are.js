const array = [1,2,3,4,55,5]

const arr = array.sort((a,b)=>{
    return a - b
})

console.log('Second largest number is '+ arr[arr.length-2])
console.log('Second smallest number is '+ arr[1])

