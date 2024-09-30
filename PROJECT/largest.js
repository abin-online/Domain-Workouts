const arr = [2, 4, 55, 67, 7]
let max = 0;
let sMax = 0;
for( let i = 0 ; i < arr.length ; i++ ){
    if( arr[i] > max ){
        sMax = max
        max = arr[i]
    }else if( arr[i] > sMax && arr[i] !== max ){
        sMax = arr[i]
    }
}

console.log(sMax)