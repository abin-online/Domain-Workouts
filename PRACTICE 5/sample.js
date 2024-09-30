// var a = 10
// var b = 5
// console.log(`Sum of ${a} and ${b} is ${a+b}`)


let vow = "abin"


function vowels(vow){

    const output = vow.replace(/[AEIOU]/gi,"")
    return output
    
}
console.log(vowels(vow))
