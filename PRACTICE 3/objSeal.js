const profile = {
    name: "Abin",
    age: 22,
    address :{
        city: "Chennai",
        
    }
}


Object.seal(profile)

console.log(Object.isSealed(profile));

profile.name = "Logesh"
delete profile.age

console.log(profile)