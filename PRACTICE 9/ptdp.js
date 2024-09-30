const Animal = {
    sound: function(){
        console.log(`${this.name} makes sound`)
    }
}

const dog = Object.create(Animal)

dog.name = "puppy"

dog.sound()