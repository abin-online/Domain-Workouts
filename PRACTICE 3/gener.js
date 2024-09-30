function* summa(n){
let m = 1
  
    while(true){
        yield m*n
        m++;
    }

    
    
}

const genarator = summa(2)

for(let i=1;i<=10;i++){
    console.log(genarator.next().value)
    }