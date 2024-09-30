const arr = [1,2,4,3,2,1]
const display = []

for(let i = 0; i< arr.length ; i++){
    let flag = 0
    for(let j = 0; j< arr.length ; j++){
        if(arr[i] == arr[j]){
            flag++
        }
    }
    if(flag === 1){
        display.push(arr[i])
    }
}

console.log(display)