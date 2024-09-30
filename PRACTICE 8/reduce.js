const array = [2,3,4,6,8]

let max = 0, sMax = 0
let result = array.reduce((acc,curr)=>{

    if(curr > max){
        sMax = max
        max = curr
    }else if(curr > sMax && curr !== max){
        sMax = curr
    }

    return sMax
},0)

console.log(sMax)