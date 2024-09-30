const array = [1,2,2,3,4,5,6,7,7,3]

let A = new Set()

for(let i = 0 ; i<array.length ; i++){
    let flag = 0
    for(let j = 0; j< array.length ; j++){
        if(array[i] === array[j]){
            flag++
        }
    }
    if(flag>1){
        if(array[i] % 2 !== 0){
           
            A.add(array[i])

        } 
        // console.log(array[i])
    }
}

console.log(A)
