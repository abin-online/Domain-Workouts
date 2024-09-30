function name () {
    console.log("Haiiii")
}


const time = setInterval(name, 1000)


setTimeout(()=> {
    clearInterval(time)
}, 5000)