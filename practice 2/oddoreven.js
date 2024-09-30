function oddoreven(num){
    return new Promise((resolve, reject) =>{

        if(typeof num === 'number' && num%2===0){
            resolve('It is even')
        }else{
            reject('Not an even')
        }
    })
}


oddoreven(6).then((msg) => console.log(msg)).catch((err) => console.log(err))