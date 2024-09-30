
// explicit binding


function age(){
    if(this.age>18){
        console.log('Eligible')
    }else{
        console.log('NOt eligible')
    }
}

const Person = {age : 22}

const Person1 = {age: 17}

age.call(Person)
age.call(Person1)