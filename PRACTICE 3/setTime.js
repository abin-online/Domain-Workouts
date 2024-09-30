

let interval = setInterval(()=>{
    console.log('HAII')
},1000)

setTimeout(()=>{
    clearInterval(interval)
}, 2000)