function addNumbers(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            const sum = a+b
            resolve(sum)
        }else{
            reject('Invalid')
        }
    })
}

const a = 4
const b = 5

addNumbers(a,b).then((sum)=>console.log(sum))
.catch((err)=>console.log(err))
