const arr = [1,2,3,4,5,6,7,8,9]

// console.log(arr.sort((a,b) =>{
//     return b-a
// }))



// let maximum = my(arr)
function my(arr){
    return Math.max.apply(null,arr)
}

console.log(my(arr))