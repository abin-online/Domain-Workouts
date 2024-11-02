function insertionSort(arr) {
    for(let i = 1 ; i < arr.length ; i++) {
        let key = arr[i];
        let j = i - 1
        while(arr[j] > key && j >= 0){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] =  key
    }
    return arr
}

const arr = [4,-5,3,-6,99]

console.log(insertionSort(arr))