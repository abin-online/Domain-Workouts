
str = "MALAYALAM"
let n = str.length

console.log(n/2)
function palindrome(str){
for(let i = 0; i< n/2 ; i++){
    if(str[i]!== str[n-1-i]){
        return 'It is not Palindrome'
    }
    return 'It is palindrome'
}   
}

console.log(palindrome(str));


