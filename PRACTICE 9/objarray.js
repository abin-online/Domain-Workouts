let arr = [{ab: 1, cd: 2}, {ab: 3, cd: 4}, {ab: 5, cd: 6}]
let sum = 0
arr.forEach(element => {
       sum =  sum + element.ab + element.cd
});

console.log(sum)