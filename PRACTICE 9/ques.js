const abc = [{af:[3,4,4]},{adf:[3,4,4]},{afd:[3,4,4]},{daldf:[3,4,4]}]

let sum = 0

for(let i = 0 ; i < abc.length ; i++){

   sum = sum + Object.values(abc[i]).flat(2).reduce((acc, curr)=>{ return acc+curr})

}

console.log(sum);
