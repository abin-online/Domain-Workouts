// let s = "silent"
// let t = "listen"

// if(s.length ===  t.length){
//     let f = s.split("").sort().join('')
//     let e = t.split("").sort().join('')
//     if(f===e) console.log(true)
//     else console.log(false)
// }

const person={name:"abin", age:6, School:null}

// const {name,age,School}=person

const defaultvalue="Error"

// console.log(School ?? defaultvalue)

console.log(person.School ?? defaultvalue) 