function* gen(){
    yield 1;
    yield console.log("Hiiiii");
    yield 54;

}

const generator = gen()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)