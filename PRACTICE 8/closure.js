function outer(){
    var x = 9
    function inner(){
        console.log(x)
    }
    return inner()
}


outer() 