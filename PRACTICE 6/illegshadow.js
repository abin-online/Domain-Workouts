function addNumber(a,b){
    return new Promise((resolve, reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            let sum = a+b
            resolve(sum)
        }else{
            reject('INVALID')
        }
    })
}

const a = 9;
const b = 4;

addNumber(a,b).then((sum)=>console.log(sum))
.catch((err)=>console.log(err))