const profile = {
    name: "Abin",
    age: 22,
    address :{
        city: "Chennai",

    }
}

Object.freeze(profile)



console.log(Object.isFrozen());

profile.address.city = "Vignesh"
delete profile.name
console.log(prof)
