const Person = {
    walk : function(){
        console.log(`${this.name} can walk`)
    }
}

const Person1 = Object.create(Person)

Person1.name = "Abin"



Person1.walk()