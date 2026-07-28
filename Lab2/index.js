import {writeFile,readFile,appendFile} from "fs/promises";
    

//await writeFile("stud.txt", "Ravikant Singh\nRoll no: 82 \n Admission no: 25b01010806");
//console.log("File Written");
//const data = readFile("stud.txt","utf-8");
//console.log(`file constant : ${data}`);
const addcontent = async (fname,content)=> {

    await  writeFile(fname,content);
    console.log(`${content} written in file : ${fname}`);

};

const readContent=async (  fname)=> {
    const data =  await readFile(fname , 'utf-8');
    return data;

};
const appendData= async (fname,content)=> {
    await appendFile(fname,"\n" + content);
    console.log("data appended ");
    //const data =await readFile(fname,"utf-8");
    //return data;
};

await addcontent("notes.txt","FS is easy in JS");
console.log("content\n" , await readContent("notes.txt"));
await appendData('notes.txt',"it can add , read and update content ");
console.log("updated contents\n",await readContent("notes.txt"));
