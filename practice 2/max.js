// const Arr=[1,2,4,4,5,6,7,3,2,2]
// let max = 0, maxi = 0
// for(let i = 0; i< Arr.length; i++){
//     let flag = 0
//     for(let j = 0; j< Arr.length; j++){
//         if(Arr[i]===Arr[j]){
//             flag++   
//         }  
//     }
//     if(flag>max){
//         max = flag
//         maxi = Arr[i]    
//     }
        
// }
// console.log(maxi)

function shadow(){

    let a = 10;
    var b = 5;
    if(true){
        let a =20;
        var b = 4;
        console.log(a)
        console.log(b)
    } 
}