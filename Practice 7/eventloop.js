console.log('Haii')

setImmediate(()=>{
    console.log('SEt immidiate')
})

process.nextTick(()=>{
    console.log('haii')
})