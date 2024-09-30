function* gen(){
    for(let i = 2; i < 20; i= i+2){
        yield i
    }
}

const generator = gen()



for(let i = 1; i < 10; i++){
    console.log(generator.next().value)
}

