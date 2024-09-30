//longest word in a string

const str = 'India is my country my'

const arr = str.split(" ")

let max = arr[0]

arr.forEach(element => {
    
    if(element.length>max.length){
        max = element
    }
});

console.log(max);