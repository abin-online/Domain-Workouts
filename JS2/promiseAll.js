const promise1 = Promise.resolve(3)
const promise2 = Promise.resolve(4)
const promise3 = Promise.reject(5)

Promise.all([promise1 , promise2 ,  promise3])
    .then((values)=> {
        console.log(values)
    })
    .catch((error)=> {
        console.error('Error : ' , error)
    })


    // If all promises are resolved, it returns an array of results.
    // If any promise rejects, it immediately rejects with that error.