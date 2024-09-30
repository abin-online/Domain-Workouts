console.log('STart');

setTimeout(function cbT(){
    console.log("Cb SetTimeout")
},2000)


fetch("https://api.netflix.com")
.then(function cbF(){
    console.log('CB netflix')
})

console.log('Endcxaz `1s+a`11')