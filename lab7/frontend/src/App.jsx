// agr file name jsx ho t o jb curly braces use kroge complier smjh jaayega ki js use kr rhe ho 
const b1={
  picUrl: "https://m.media-amazon.com/images/I/71jOhVzGjjL._AC_UY327_FMwebp_QL65_.jpg",
  bname : "React Design Pattern",
  price : 1190,
  quantity : 10,
  rating :5.0,
};
function Book(){
  return (
    <div> 
      <img 
      src={b1.picUrl}
      alt={b1.bname}
      />
    <h1> {b1.bname}</h1>
    <h2> Price : {b1.price}</h2>
    <h3> Quantity : {b1.quantity}</h3>
    <h4> Rating : {b1.rating} </h4>
    </div>
  );
}

export default function App() {
  return (
    <>
    <Book/>
    <h1> HELLO REACT</h1>
    <Book/>
    <Book/>
    </>
  );
}