function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n - 1; i++){
        let minIndex = i
        for(let j = i+1 ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i!= minIndex){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

const arr = [4,-5,3,-6,99]

console.log(selectionSort(arr))