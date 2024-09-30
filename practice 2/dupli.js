const arr = [1,2,3,4,4,5,5,4,5,6,7,8]
const arr1 = []

for(let i =0 ; i< arr.length; i++){
    let flag = 0;
    for(let j=0; j< arr.length; j++){
        if(arr[i] === arr[j]){
            flag++
        }
    }
    if(flag === 1){
        arr1.push(arr[i])
    }
}

console.log(arr1)

