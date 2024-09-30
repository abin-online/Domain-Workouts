const abc = [{df:5,adf:4},{ddf:5,adf:4},{ddf:5,adfd:4}]

let sum = 0
 

for (let i = 0 ; i < abc.length ; i++){
    
    sum = sum + Object.values(abc[i]).flat().reduce((acc, curr)=> {return acc + curr})

}
c
console.log(sum);

