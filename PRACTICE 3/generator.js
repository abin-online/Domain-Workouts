
//generator function to yield multiples of a given number

function* multipleOf(n){

    let multiple = 1;

    while(true){
        yield n * multiple
        multiple++ 
    }
}

const generator = multipleOf(4)

for(let i = 0; i< 10; i++){
    console.log(generator.next().value)
}
