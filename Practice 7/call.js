function hello(callback){
    callback()
}

function hi(){
    console.log('Hii')
}

hello(hi)