let name = {
    fname: "abin",
    lname: "Babu",
   
}

let printname = function (home){
    console.log(this.fname + " " + this.lname + home);
}

let display = printname.bind(name, 'Kochi')

display()

let name2 = {
    fname: "MS",
    lname: "Dhoni"
}

// printname.call(name2)