let mul  = function (x,y){
    console.log(x * y);
}

let multiplyByTwo = function (x, y){
    console.log(x * y);
}

let multiplyByTwo = mul.bind(this, 2)