details=[
    {name:"Vignesh",class:"12th",score:90,status:"PASS"},
    {name:"Abin",class:"12th",score:91,status:"PASS"},
    {name:"Nithina",class:"12th",score:85,status:"PASS"},
    {name:"Logesh",class:"12th",score:96,status:"PASS"},
    {name:"Harish",class:"12th",score:73,status:"PASS"},
]

// let max = 0
// let name = ""

// details.forEach(element => {
    
//     if(element.score > max){

//         max = element.score
//         name = element.name
//     }
    
// });

const display = details.reduce((max, curr) =>{

    if(max < curr){
        max = curr
    }
    return max
})


console.log(display);