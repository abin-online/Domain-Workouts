let cache = {}
function memo(num){
    console.log(cache)
    if(cache[num]){
        console.log('(If) taking value from Cache')
    }else{
        console.log('Else condition is working ')
        cache[num] = num+10
        console.log(cache[num])
    }
}


for(let i = 0; i< 50; i+=10){
    memo(i)
}


