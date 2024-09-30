function Person(name, job, dob) {
    this.name = name;
    this.job = job;
    this.dob = dob;
}

Person.prototype.calculateAge = function(){
    console.log("Current age is " + (2024 - this.dob) )
}


console.log(Person.prototype);


let p1 = new Person('Abin','Developer',2001)
console.log(p1)
p1.calculateAge()