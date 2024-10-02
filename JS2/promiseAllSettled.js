const promise1 = Promise.resolve(3)
const promise2 = Promise.reject(4)
const promise3 = Promise.resolve(5)

Promise.allSettled([promise1 , promise2 ,  promise3])
    .then((values)=> {
        console.log(values)
    })
    .catch((error)=> {
        console.error('Error : ' , error)
    })


    // Waits for all promises to settle (either resolved or rejected).
    // Always returns an array of objects describing the outcome of each promise.