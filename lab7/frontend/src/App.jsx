import Book from "./components/Book";// agr file name jsx ho t o jb curly braces use kroge complier smjh jaayega ki js use kr rhe ho 
import Pen from "./components/pen";

const b1={
  picUrl: "https://m.media-amazon.com/images/I/71jOhVzGjjL._AC_UY327_FMwebp_QL65_.jpg",
  bname : "React Design Pattern",
  price : 1190,
  quantity : 10,
  rating :5.0,
};

const b2={
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname : "The Road to React",
  price : 1190,
  quantity : 10,
  rating :5.0,
};
const p1={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNigUXCohzK0x2qdsVvkng4lmoNJTEXIDOx-ZeUaEjCw&s=10",
  company:"Parker",
  price:1000,

};

const p2={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0yq_l0qKy7p2BD4EmgaQIfAxbfdjaTpr78QQyGc0Og&s=10",
  company:"Parker folis",
  price:1500,

};


  

export default function App() {
  
  return (
    <>
    <h1> ONLINE BOOK STORE </h1>
    <div className="container">

    
    <Book book={b1}/>
    
    <Book book ={b2}/>
    <Book book={b1}/>
    <Book book={b2}/>
    <Pen pen={p1}/>
    <Pen pen={p2}/>
    </div>
    </>
  );
}