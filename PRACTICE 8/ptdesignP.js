// Prototype object
const Animal = {
    // Method to make the animal sound
    makeSound: function() {
      return `${this.name} makes a sound.`;
    },
    // Method to eat
    eat: function() {
      return `${this.name} is eating.`;
    }
  };
  
  // Create objects from the prototype
  const dog = Object.create(Animal);
  dog.name = 'Dog';
  
  const cat = Object.create(Animal);
  cat.name = 'Cat';
  
  // Demonstration
//   console.log(dog.makeSound()); // Output: Dog makes a sound.
//   console.log(dog.eat()); // Output: Dog is eating.
  
//   console.log(cat.makeSound()); // Output: Cat makes a sound.
//   console.log(cat.eat()); // Output: Cat is eating.
  

console.log(dog);