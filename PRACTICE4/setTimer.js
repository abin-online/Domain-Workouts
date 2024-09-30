let interval = setInterval(()=>{

    console.log('Haiiii')
}, 1000)


setTimeout(()=>{
    clearInterval(interval)
},3000)