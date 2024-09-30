const Animal = {
    sound: function(){
        return `${this.name} makes sound`
    }
}

const dog = Object.create(Animal)

dog.name = "Dog"

console.log(dog.sound())