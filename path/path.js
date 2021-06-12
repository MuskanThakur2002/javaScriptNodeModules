const path = require("path")
// console.log(path)
console.log(path.dirname("/home/mehzabeen/file/path/path.js"))
console.log(path.basename("/home/mehzabeen/file/path/path.js"))
console.log(path.extname("/home/mehzabeen/file/path/path.js"))

console.log(path.parse("/home/mehzabeen/file/path/path.js"))
const mypath=path.parse("/home/mehzabeen/file/path/path.js")
console.log(mypath.name)