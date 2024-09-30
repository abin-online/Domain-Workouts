let b = 100
{
    let b = 20;
    console.log(b)
}
console.log(b)

//shadowing


const c = 100;
{
    const c = 20;
    console.log(c)
}
console.log(c)