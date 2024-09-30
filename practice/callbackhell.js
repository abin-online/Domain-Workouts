const cart =["shoe","pants","kurta"]

const promise = createOrder(cart)
console.log(promise)
promise
.then(function(orderId){
    console.log(orderId)
}).then(()=>{
    proceedTopayment(orderId)
})
.catch((err)=>{
    console.log(err.message)
})


function createOrder(cart){
    const pro = new Promise((resolve,reject) =>{
        if(!validateCart(cart)){
            const err = new Error('cart is not valid')
            reject(err)
        }
        const orderId ="12345";
        if(orderId){
            setTimeout(()=>{
                
                resolve(orderId)
              
            },5000)
           
        }
    })

    return pro
}

function proceedTopayment(orderId){
    return new Promise((resolve, reject)=>{
        resolve("Payment successfull");
    })
}

function validateCart(cart){
    return true;
    // return false;
}

// validateCart();