const chalk=require("chalk")
const name="muskan"
console.log(chalk.white(name))
console.log(chalk.white.italic(name))
console.log(chalk.blue.underline.inverse(name))

const validator=require("validator")
const res=validator.isEmail("muskan@muskan.com")
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));