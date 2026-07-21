import { EventEmitter } from "node:events";

const sayHi=(name)=>{
    console.log(`${name} logged in`);
};

const task = new EventEmitter();
task.once("greet",()=> {
    console.log("System Started ");
});
task.once('exit',(name)=> {
    console.log(`System shutdown by ${name}`);
});

task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts working`);
});
//task.on("greet",(name)=> {
  //  console.log(`${name}"LOGGED OUT");
//});

task.emit("greet","Rahul");
console.log();
task.off("greet",sayHi);
task.emit("greet","Manish");
task.emit("greet","Mukesh kumar")
console.log();
task.emit("exit","Manager");// ONCE IS GETS EXIT FUNCTION THE NEXT ONE WILL NOT EVALUATE .EXECUTE ONLY ONCE 
console.log();
task.emit("exit","eMPLOYEE");//WONT BE EFFECTED 
console.log("total listener" , task.listenerCount("greet"));
task.removeAllListeners("greet");