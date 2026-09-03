import http, { createServer } from "http";
const server = http.createServer((req,res)=> {
if (req.url==='/'&& req.method==='GET')
    res.end("Home Page ")
else if (req.url==='/product' && req.method==='GET')  {
    const products =[
        {
            id: 1,
            name:"mobile",
            price:2000,
        },
        {
            id:2 ,
            name : "duster ",
            price : 10,
                        },
    ];

    res.end(JSON.stringify(products));//only understand strings 
}
else if (req.url==='/product'&& req.method==='POST') {
//retrive data from client 
let body ="";
req.on("data",(chunk)=> {
    body+=chunk
});
req.on("end",()=>{
    const product =JSON.parse(body)
//add data to database
res.writeHead(201,{
    "content-type":"application/json",
});
//send back the status 

    res.end( 
        JSON.stringify({
            msg:"product added",
            product,
        }),
    );
});
}

else if (req.url==='/product' && req.method ==='PUT')
    res.end('update product')

else if (req.url==='/product'&& req.method==='DELETE')
    res.end('remove product')
else{
    res.statusCode=404;
    res.end("not found ");
    
}
});
server.listen(3000,()=> console.log("prg11 is running "));