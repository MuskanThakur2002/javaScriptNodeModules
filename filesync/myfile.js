const fs=require("fs")
fs.writeFileSync("bio.txt","my name is muskan")
fs.appendFileSync("bio.txt","  who are you")
const new_bio=fs.readFileSync("bio.txt","utf8")
console.log(new_bio)
fs.renameSync("bio.txt","mybio.txt")
fs.unlinkSync("mybio.txt");
fs.rmdirSync(newfolder)