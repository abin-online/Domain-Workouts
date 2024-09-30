const str = "I am Abin and I am 22 years old"
const arr = str.split(" ")


const display = []

for(let i = 0; i< arr.length; i++){




    
    for(let j = 0; j< i; j++){
       
        if(arr[i] === arr [j]){
            
            break;
        }
        if(i === j){
            display.push(arr[i])
        }
    }
}

console.log(display.join(" "))