const array = [2,3,4,5,6]

let max = 0, smax = 0


let out = array.reduce((acc,curr)=>{
    if(curr > max){
        smax = max
        max = curr
    }else if(curr>smax && curr!==max){
        smax = curr
    
    }
    return smax
},0)

console.log(out)