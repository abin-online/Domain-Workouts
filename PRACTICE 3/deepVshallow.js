let students = [

    {id: 1, name: "Harry", age: 25},
    {id: 2, name: "Rony", age: 22},
    {id: 3, name: "Hermamn", age: 27},

]



// let studentsCopy = [...students];

let studentsCopy = JSON.parse(JSON.stringify(students))

studentsCopy[2].name = "Log"

console.log(students[2]);
console.log(studentsCopy[2]);