
function* generatorFibo(){

    let a = 0 
    let b =1;

   while(true){
    yield b;

    [a,b] = [b,a+b]
   }
}

let generatorFibon = generatorFibo()

console.log(generatorFibon().next().value)
console.log(generatorFibon().next().value)
console.log(generatorFibon().next().value)
console.log(generatorFibon().next().value)
console.log(generatorFibon().next().value)
console.log(generatorFibon().next().value)