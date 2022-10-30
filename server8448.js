let http = require("http");
let server =http.createServer((req,res)=>{
    let userName ={
        name:"preeti"
    };
    res.write(JSON.stringify(userName));
    res.end();
})
server.listen(8448,()=>{
    console.log("Server up and running")
})
