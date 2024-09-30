function* gen(message){

    while(true){
        yield message
    }


}

const generator = gen("HELLO")

for(let i = 0; i< 10; i++){
    console.log(generator.next().value)
}