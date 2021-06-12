const fs=require("fs")
fs.writeFile("chal.txt","my name is muskan",(err)=>{
    console.log("yes")
})
fs.appendFile("chal.txt"," my hobbie is singing",(err)=>{
    console.log("no")
})
fs.readFile("chal.txt","utf-8",(err,data)=>{
    console.log(data)
})
fs.rename("chal.txt","mychal.txt",(err)=>{
    console.log("yupp")
})
fs.unlink("mychal.txt",(err)=>{
console.log("delete");
})