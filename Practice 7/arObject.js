const Person = [{name: "Abin", age: 22, score: 78},
{name:"Logesh", age: 21, score: 79},
{name: "Vignesh", age: 22, score: 80},
{name: "Nithina", age: 23, score: 81},
{name: "Harish", age: 22, score: 82}]

let max = {name: "", score: 0}, sMax = {name: "", score: 0}

const secondHigh = Person.reduce((acc,curr)=>{
    if(curr.score > max.score){
        sMax = max
        max = curr

    }else if(curr.score > sMax.score && max.score !== curr.score ){
        sMax = curr
    }
    return sMax
},0)

console.log(secondHigh)