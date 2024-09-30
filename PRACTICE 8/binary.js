let n = 11
let binary = n.toString(2)
console.log(binary);
let flag = 0
for(let i = 0; i< binary.length ; i++){
    if(binary[i] === '1'){
        flag++
    }
}
return flag