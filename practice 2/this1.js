//implicit binding

const person = {
    name: "abin",
    sayName: myname}

function myname(){

   return this.name

}
console.log(person.sayName());





