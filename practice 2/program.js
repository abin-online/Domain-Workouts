const Object = {
    name: "Abin",
    age: 22
}

const {name} = Object    // destruction of a single property
console.log(name);

for(let i in Object){      // looping through object
    console.log(i +" " + " "+ Object[i])
}

delete Object.age   // deleting a property

for( let i in Object){
    console.log(i +" " + " "+ Object[i])
}

const Obj = {...Object, place:"Kerala"}    //spread an object and add a property
console.log(Obj)