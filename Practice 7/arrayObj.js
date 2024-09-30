const array = [{abc:3, efg:4}, {abc: 3, efg:4}, {abc: 3, efg: 4}, {abc:3,efg:4}]
let sum = 0
array.forEach(element => {
    
    sum = sum + element.abc + element.efg
    
});


console.log(sum)