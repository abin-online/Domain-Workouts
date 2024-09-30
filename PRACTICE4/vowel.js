s ="hello"
let str = s.toLowerCase()
let vow = []

let vowels = ['a','e','i','o','u','A','E','I','O','U']

for(let i = 0; i< s.length ; i++){
    if (vowels.includes(str[i])){
        vow.push(str[i])   
    }
}
let rev = vow.reverse()
console.log(rev)
let k = 0
let str1 = ""
for(let j = 0; j< s.length ; j++){

    if (vowels.includes(str[j])){
        str1 = str1+rev[k]
        k++
    }else{
        str1 = str1+str[j]
    }
}

console.log(str1)