const profile = {
    name: "Abin",
    age: 22,
    address :{
        city: "Chennai",
        
    }
}


Object.preventExtensions(profile)

profile.name = "Babu"

delete profile.age

profile.age = 60

console.log(profile);