const str = "madam"

function palindrome(str){
    for(let i = 0 ; i <  str.length / 2 ; i++){
        if(str[i] !== str[str.length - i -1]){
            return "it is not a palindrome"
            
        }else{
            return "it is a palindrome"
        }
    }
}

console.log(palindrome(str))