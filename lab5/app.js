import express from "express";

const app = express();

app.get("/",(req,res)=> { 
    res.send ("<h1> Hello Express");
});
app.get('/about',(req,res)=> {
    res.send("WE are FSD Developer ")
})
//const server = app.listen (3000,()=> console.log("Server is running "));
//server.on("error",(err)=> {
   // console.log("Srever listen error:",err);
    //})
    app.post('/login',(req,res)=> { 
    res.send({msg: 'user login'})
})
app.put('/user/update/1',(req,res)=> {
    res.send({msg: 'user  update '})
})

app.delete('/users/1',(req,res)=>{
    res.send({msg:"remove user 1"})
})
    app.use((req,res)=> {
        res.status(404).send("Not found")
    })

app.listen (3333,()=> console.log ("Server is running 3333"));