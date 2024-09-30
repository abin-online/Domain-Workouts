function Sum(...num){
    return num.reduce((acc,curr)=>{
        return acc+curr
    },0)
}

console.log(Sum(1))
