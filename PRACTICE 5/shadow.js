function outer(){

    var num = 8;
    function inner(){

        console.log(num)
        
    }
    return inner
}

outer()