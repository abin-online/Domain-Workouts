// function hello (message){
//     console.log(message+ " " + this.name)
// }

// const person =  {name: 'Logesh'}

// hello.apply(person,['Hi'])


function say(message,message3){
    console.log( message +' '+ message3 +" " + this.age)
}

const person = {age: 22}

say.apply(person, ['Age is','not'])