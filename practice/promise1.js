
// function add(a,b,callback){
//     let err=false;
//     if(a===0){
//         err=true
//     }
//     callback(a+b,err)
// }


// function multiply(a,b,callback){
//     callback(a*b)
// }


// function division(a,b,callback){
//     callback(a/b)
// }

// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("ERROR")
//     }else{
//         console.log(sum)
//         multiply(sum,sum,(product) =>{
//             console.log(product)
//             division(product,10,(result)=>{
//                 console.log(result)
//             })
//         })
//     }
    
// })


function add(a,b){
    return new Promise((resolve,reject) =>{
        if(a===0){
            reject('Error')
        }else{

            resolve(a+b)
        }
        
    })
}

function multiply(a,b){
    return new Promise((resolve,reject) =>{
        if(a===0){
            reject('Error')
        }else{

            resolve(a*b)
        }
        
    })
}

function div(a,b){
    return new Promise((resolve,reject) =>{
        if(b===0){
            reject('Error')
        }else{

            resolve(a/b)
        }
        
    })
}


add(10,20).then((sum) =>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((quo)=>{      //quo === quotient
    console.log(quo)
})

.catch((err)=>{
    console.log(err)
})