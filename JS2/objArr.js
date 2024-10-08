const abc = [{ab:4},{cd:5},{ef:7}]
let sum = 0
for(let i of abc) {
    sum += Object.values(i)[0]
}
console.log(sum)