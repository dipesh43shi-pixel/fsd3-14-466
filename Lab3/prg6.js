import {writeFile} from 'fs/promises';//use of streams in node js- chunks ke form me kisi bhi bade file ko read karne ke liye stream ka use kiya jata hai

for(let i=1; i<10000; i++){
    await writeFile('big.txt', `Hello Buddy ${i}\n`, {flag: 'a'}); //flag: 'a' means append mode
}