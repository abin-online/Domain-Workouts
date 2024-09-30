"use strict"

const obj = {
    a: 10 ,
    x: function (){
        console.log(this) // value of 'this' is  object
        console.log(this.a)
        console.log(globalThis);

    }
}


obj.x()