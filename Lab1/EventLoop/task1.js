const f1 =()=> {
    console.log(" f1 start");
    f2();
    console.log(" f1 running");
    console.log("f1 end ");
};
const f2=() => {
    console.log(" f2 start");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};
const f3 =()=> {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 ends");
};
function main() {
    console.log("main starts");
    f1();
    
    console.log("main end");
}

main();
// the calling process which we used here is called synchronous call 
// its single threaded => means it only perform one task at a time .
//in asynchronous we use event loop to manage the call stack 
// TYPES OF TIMERS 
//=> ASYNCHRONOUS CALL USING TIMERS 
//1. SET TIME OUT 
//2. SET IMMEDIATE 
//3.PROCESS.NEXTTICK
//4.SET INETRVAL