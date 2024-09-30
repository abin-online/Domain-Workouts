let names = ["Mary","John","Emma"], heights = [180,165,170]

var sortPeople = function(names, heights) {
    let arr = []
    for(let i = 0 ; i< names.length; i++){
        arr.push({name: names[i], height: heights[i]})
    }

    arr.sort((a,b)=>{
        return b.height - a.height
    })

    console.log(arr)

    let ans = arr.map((x)=>
    {
        return x.name
    })

    return ans
    
};

console.log(sortPeople(names,heights));