const arr = ["Amal", "Arun", "Kiran", "manoharan", "Anandhu", "Manu", "Sachin", "Sivasankaran", "Amarnadh"];

arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(arr);