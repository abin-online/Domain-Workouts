

function* gen(num){

    let multiple = 1
    while(true){
        yield  num * multiple
        multiple++
    }
}

const generator  = gen(3)




    for(let i = 0; i < 10 ; i++){
        console.log(generator.next().value)
    }




