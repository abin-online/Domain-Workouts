function* countNumber() {
    for(let i = 4 ; i <= 10 ; i+=4){ 
        yield i 
    }
}

const numbers = countNumber()

for(let value of numbers) {
    console.log(value)
}
