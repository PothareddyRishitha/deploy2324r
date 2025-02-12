var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    fs.readFile("api.json","utf-8",(err,data)=>{
        if(err){
            res.write(JSON.stringify({
                err:err.message
            }))
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(3002,()=>{
    console.log("helo server is running")
})