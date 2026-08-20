import http from "http";
const server =http.createServer((req,res)=> {
    res.writeHead(404,{
        "content-type": "text plain",
    });
    res.end("<h1> Welcome to sever</h1>");
   //console.log("Welcome to Node JS ");
    
});
server.listen(4444,()=> console.log("Server is Running"));
