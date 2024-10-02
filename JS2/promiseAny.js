const promise1 = Promise.reject(3)
const promise2 = Promise.reject(4)
const promise3 = Promise.reject(5)

Promise.any([promise1 , promise2 ,  promise3])
    .then((values)=> {
        console.log(values)
    })
    .catch((error)=> {
        console.error('Error : ' , error)
    })

 // Resolves as soon as any of the promises resolve.
//  If none of the promises resolve (i.e., all are rejected), it throws an AggregateError.