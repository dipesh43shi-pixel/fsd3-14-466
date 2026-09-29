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
      src="https://m.media-amazon.com/images/I/71jOhVzGjjL._AC_UY327_FMwebp_QL65_.jpg"
      alt="Design Pattern React "/>
    <h1> Lets Us React </h1>
    <h2> Price : 765</h2>
    <h3> Quantity : 5</h3>
    <h4> Rating : 5.0 </h4>
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