const hi = setInterval(()=>{
    console.log("Hiiii")
},1000)


setTimeout(() => {
    clearInterval(hi)
}, 5000);