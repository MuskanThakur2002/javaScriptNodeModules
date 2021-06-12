const fs=require("fs")
const http=require("http")
const server=http.createServer()
server.on("request",(req,res)=>{
    fs.readFile("index.txt",(err,data)=>{
        if (err)return console.error(err);
        res.end(data)
    })

    // 2nd way for streaming means line by line
    const rstream = fs.createReadStream("index.txt",)
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    })
    rstream.on("end",()=>{
        res.end()
    })
    rstream.on('error',(err)=>{
        console.log(err)
        res.end("file not found")
    })
//     const rstream = fs.createReadStream("index.txt",)
//     rstream.pipe(res)

})
server.listen(9000,"127.0.0.1")


// api.openweathermap.org/data/2.5/weather?q=Pune&appid=1073ebaa6cdab4af91cdd1360f8da78e


