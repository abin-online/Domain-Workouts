"use strict"

const obj2 = {
    a:10,
    
    x: function (){
        console.log(this)
        const y = () =>{
            console.log(this)
         }
         y();
    }
}

 
obj2.x()

//arrow function does not provide their own this binding
// it retaiins the this value of thr enclosing lexical context