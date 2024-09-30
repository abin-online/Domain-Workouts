let str = "madam"
let rev = ""

let i = str.length - 1; 
while(i>=0){
    rev = rev+str[i]
    i--
}

if(rev === str){
    console.log('It is a palindrome')
}else{
    console.log('It is not a palindrome')
}