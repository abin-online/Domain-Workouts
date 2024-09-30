let candies = [2,3,5,1,3]
let extraCandies = 3

var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    let arr = []
    let most = candies.reduce((acc, curr)=> {
        if(curr > max){
            max = curr
        }else{
            return max
        }

        return max
    })

    for(let i = 0 ; i <  candies.length ; i++){
        if(extraCandies + candies[i] >= most){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }

    console.log(arr);
};

kidsWithCandies(candies, extraCandies)