function Person(name, age, place){
    this.name = name
    this.age = age
    this.place = place
}


Person.prototype.Nationality = "Indian"

const Abin = new Person("Abin", 22, "Kerala")

console.log(Abin.Nationality)

