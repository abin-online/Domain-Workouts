let car = new Object()

car.name = "Benz"
car.model = "A-class"

console.log(car)

console.log(Object.keys(car))

console.log(Object.entries(car))


for(let i in car){
    console.log(car[i])
}