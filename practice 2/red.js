const arr = [1,2,3,4,5,55,6]

const display = arr.reduce((max, curr) =>{
    if(max > curr){
        max = curr
    }
    return max
})

console.log(display)

