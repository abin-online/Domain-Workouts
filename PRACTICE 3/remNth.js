const array = [1,2,3,4,5,6,6,7]

const n  = 6

for(let i =0; i < array.length ; i++){

    if(array[i] === n){
        for(let j = i ;  j < array.length-1 ; j++){

            array[j] = array[j+1]

        }
       array.pop()
    }
}

console.log(array)