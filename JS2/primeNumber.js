function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

function* primeNumb(limit) {
    for(let i = 0 ; i < limit.length ; i++) {
        if(isPrime(limit[i])){
            yield limit[i]
        }
    }
}


const arr = [4, 3, 99, 97, 13, 17]

const result = primeNumb(arr)

for (let value of result) {
    console.log(value);
}
