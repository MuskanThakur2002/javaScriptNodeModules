const EventEmmiter = require("events")
const event= new EventEmmiter()

event.on("say my name",()=>{
    console.log("your name is rahul")
})

event.on("say my name",()=>{
    console.log("your name is muskan")
})

event.on("say my name",()=>{
    console.log("your name is roshni")
})
event.emit("say my name")


//2nd question
event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and page code is ${msg}`)
})
event.emit('checkpage',200,"ok")