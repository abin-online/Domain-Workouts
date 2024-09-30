let name = {
    fname: "Abin",
    lname: "Babu"
}

let printName = function(){

    console.log(this.fname + this.lname);

}

const display = printName.bind(name)
display()
