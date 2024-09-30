const ar = [10,20,30,40,50]

ar.splice(2,0,25)

console.log(ar)

let sum = ar.reduce((acc, curr)=>{
    if(curr>30){
        return acc + curr;
    }else{
        return acc
    }
},0)

console.log(sum)
