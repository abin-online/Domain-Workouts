// function name(n = "Abin"){
//     console.log(`MY name is ${n}`)
// }

// name()

// const object = {
//     name: "abin",
//     age: 22,
//     add: {
//         city: "Kochi"
//     }
// }

// o

const array = [10 ,20 , 30 , 40, 50]

array.splice(2,0,25)

console.log(array)

const output = array.reduce((acc, curr)=>{
    if(curr>30){
        return curr+acc
    }else{
        return acc
    }
},0)

console.log(output)
let max = 0
const hi = array.reduce((acc,curr)=>{
    if(curr>max){
        return curr
    }else {
        return max
    }
},0)

console.log(hi)


let big = array.reduce((acc, curr)=>{
    return acc+curr
},0)

console.log(big)

let fil = array.filter((x)=>{
    if(x%2==0){
        return x
    }
})

console.log(fil)

let map = array.map((x)=>{
return x*x
})

console.log(map)