const fs = require("fs");
// fs.writeFile("data","my name is muskan async",(err)=>{
//     console.log("done")
//     console.log(err)
// })
// // fs.appendFile("data"," i am good girl",(err)=>{
    // console.log("yes")
// })
fs.readFile("data","utf-8",(err,res)=>{
    console.log(res)
})
