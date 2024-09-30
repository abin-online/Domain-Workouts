const arr = [9,8,7,6,5,4,3]

arr.sort((a,b)=>{
    return a - b
})

console.log(`The second largest number is ${arr[arr.length-2]} `)

console.log(`The second smallest number is ${arr[1]}`)

