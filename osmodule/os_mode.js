const os=require("os")
// console.log(os);
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())



//free memory
// const free=os.freemem() // it is in bites
// console.log(`${free / 1024 / 1024 / 1024}`) // it is in gb


// //total memory
// const total=os.totalmem() // it is in bites
// console.log(`${total / 1024 / 1024 / 1024}`) // it is in gb