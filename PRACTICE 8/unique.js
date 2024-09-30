const array = [2,4,5,39,2,4,10]
let display = []

for(let i = 0; i< array.length ; i++){

    let flag  = 0

    for(let j = 0 ; j < array.length ; j++){

        if(array[i] === array[j]){

            flag++

        }
    }

    if(flag === 1){

        display.push(array[i])

    }

}

console.log(display)