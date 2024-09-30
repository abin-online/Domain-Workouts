const Obj = {
    name: "abin",
    age: 22,
    place: "Kerala"
}

delete Obj.name

console.log(Obj)
console.log(Object.keys(Obj))
console.log(Object.entries(Obj))

for( i in Obj){
    console.log(Obj[i])
}