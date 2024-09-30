details=[
    {name:"Vignesh",class:"12th",score:90,status:"PASS"},
    {name:"Abin",class:"12th",score:91,status:"PASS"},
    {name:"Nithina",class:"12th",score:85,status:"PASS"},
    {name:"Logesh",class:"12th",score:96,status:"PASS"},
    {name:"Harish",class:"12th",score:73,status:"PASS"},
]

const display = details.sort((a,b)=>{
    return b.score - a.score
})

console.log(display)