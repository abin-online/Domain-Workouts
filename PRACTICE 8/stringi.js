var finalString = function(s) {
    let str = ''
    for(let i = 0; i< s.length ; i++){
        if(s[i] === 'i'){
            str = str.split("").reverse().join("")
        }else{
            str = str+s[i]
            console.log(str)
        }
    }
    return str
};


console.log(finalString("string"))