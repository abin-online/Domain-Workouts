const person = {
    name: "aBIN",
    AGE: 22
}

for(let i in person){

    console.log(i+ "  :" + " " + person[i])
}



console.log(globalThis === global)