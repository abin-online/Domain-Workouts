function* countNumber() {
    for(let i = 0 ; i <= 10 ; i++){
        yield i
    }
}

const numbers = countNumber()

for(let value of numbers) {
    console.log(value)
}
