// agr file name jsx ho t o jb curly braces use kroge complier smjh jaayega ki js use kr rhe ho 
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


function Book(props){
  //console.log(props);
  const {rating ,bname,price,quantity,picUrl}=props.book;
  return (
    <div className="book">
     
      <img 
      src={picUrl} 
      alt={bname}
      />
    <h1> {bname}</h1>
    <h2> Price : {price}</h2>
    <h3> Quantity : {quantity}</h3>
    <h4> Rating : {rating} </h4>
    </div>
  );
}

export default function App() {
  
  return (
    <>
    <h1> ONLINE BOOK STORE </h1>
    <div className="container">

    
    <Book book={b1}/>
    
    <Book book ={b2}/>
    <Book book={b1}/>
    <Book book={b2}/>
    </div>
    </>
  );
}