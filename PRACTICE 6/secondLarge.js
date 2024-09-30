const array = [2,3,4,5,6,9]
let sMax = 0;
let max = 0;

for(let i = 0 ; i < array.length ; i++){

        if(array[i] > max){
            sMax = max
            max = array[i]    

        }else if(array[i] > sMax && array[i] !== max){

            sMax = array[i]
        }

}

console.log(`Second largest number is ${sMax}`)