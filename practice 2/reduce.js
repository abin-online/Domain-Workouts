const arr = [1,2,3,45,6,7,8]

const output =  arr.reduce((curr,max) =>{

    if(max<curr){
        max = curr
    }
    return max
})

console.log(output);
