
function checkpalindrome(str){

    let reversed = '';

    for(let i=str.length-1 ;i>=0;i--){
        reversed += str[i]
    }

    return reversed;

}


let str = "madam"

let res = checkpalindrome(str)

console.log(res===str)

