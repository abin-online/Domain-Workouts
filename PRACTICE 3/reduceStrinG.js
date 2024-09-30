const array = ["hellO", "bYe", "seeYou", "comeBack"]

const output =  array.reduce((max, curr)=>{

    if(curr.length > max.length){
        return curr
    }else{
        return max

    }

},array[0])


console.log(output)