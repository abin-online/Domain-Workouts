const array = {
    name: "",
    age : 24
}

array['name'] = "Abin"
array.name = 'log'

delete array['name'] 
delete array.age

console.log(array)