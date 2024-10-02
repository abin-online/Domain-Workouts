const promise1 = Promise.resolve(3)
const promise2 = Promise.reject(4)
const promise3 = Promise.resolve(5)

Promise.race([promise1 , promise2 ,  promise3])
    .then((values)=> {
        console.log(values)
    })
    .catch((error)=> {
        console.error('Error : ' , error)
    })

//Resolves or rejects as soon as the first promise settles (either resolved or rejected).