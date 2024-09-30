const para = "Bob hit a ball, the hit BALL flew far after it was hit."
const banned = "hit"

const array = para.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ")

console.log(array)
let max = 0;

let newarr = []
for(let i=0; i<array.length; i++){
    var flag = 0;
    for(let j=i+1; j<array.length; j++){
        if(array[i]===array[j]){
            flag++   
        }
    }
    if(flag>=max){
        newarr.push(array[i])
        max=flag;
    }
}
console.log(newarr)

// if(newarr[newarr.length-1]===banned){
//     console.log(newarr[newarr.length-2])
// }else{
//     console.log(newarr[newarr.length-1])
// }
