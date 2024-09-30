let shallowObj = {
    array1 : [1,2,3,4,5],
    array2 : [6,7,8,9,10]
}

let shallowObj2 = {...shallowObj};
shallowObj2.array1[0] = 1000


let shallowObj3 = Object.assign({}, shallowObj)
shallowObj3.array1[0] = 2000

let shallowObj4 = JSON.parse(JSON.stringify(shallowObj))
shallowObj4.array1[0] = 3000 

//deep copy

console.log(shallowObj);