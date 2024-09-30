"use strict"

const obj2 = {
    a:10,
    x:  () =>{
       console.log(this)
    }
}

 
obj2.x()