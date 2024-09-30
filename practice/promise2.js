function getName(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Abin")
        },3000)
    })
}

function getMob(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("9061625083")
        },2000)
    })
}

// Promise.all([getName(),getMob()]).then((result) =>{
//     console.log(result)
// })

// Promise.any([getName(),getMob()]).then((result) =>{
//     console.log(result)
// })


async function getUser(){
   let name = await getName()
   console.log(name) 
   let mob = await getMob()
   console.log(mob)
}

getUser();