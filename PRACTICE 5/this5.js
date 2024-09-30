"use strict"

//call

const student = {
    name: "abin",
   print: function (){
        console.log(this.name)
    }
}


student.print()

const student2 = {
    name: "AB"
}

student.print.call(student2)