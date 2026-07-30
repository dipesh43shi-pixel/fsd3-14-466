import readline from "readline/promises";
import { stdin,stdout } from "process";
import {writeFile,readFile} from "fs/promises";
import { stringify } from "querystring";

//Data base using file starts
const FILE="product.json";

const getCart=async() => {
const data = await readFile(FILE,"utf-8")
return JSON.parse(data);

};

const saveCart=async (cart) => {

await writeFile(FILE,JSON,stringify(cart,null,2));
};

const addToCart= async (proudct)=>{
    const cart =await getCart();
    const isFoundInCart = cart.find((item) => item.id===proudct.id);
    if(isFoundInCart) {
        isFoundInCart.qty += 1;
    }else
        cart.push(proudct);
        await saveCart(cart);
        console.log(`${proudct.name} added/updated to 🛒`);

    };

const displayCart=async ()=> {
    const cart = await getCart();
    if(cart.length==0)
    {
        console.log("🛒 is empty");
        return;
    }
    console.table(cart);
    const total = cart.reduce((sum,item) => sum + item.price*item.qty,0);
    console.log(`Total payable amount Rs. ${total}`);
};


const main = async () => {
    let choice;
    const cin=readline.createInterface({input:stdin,output:stdout});

do{


    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1.......Show Cart");
    console.log("2.......Add Prodcut");
    console.log("3.......Remove Prodcut");
    console.log("4.......Update Quantity");
    console.log("5.......checkout");
    //console.log("Main is working");
    choice=await cin.question("Enter Your Choice");//
    switch(Number(choice)) {
        case 1:
            //console.log("Show cart");
            await  displayCart();
            break;
            case 2:
                //console.log("Add product");
                const item= await cin.question("Enter id, name ,price,qty :");
                const [id,name,price,qty]=item.split(",").map((p)=> p.trim());
                await addToCart({
                    id:Number(id),
                    name,
                    price : Number(price),
                    qty:Number(qty),
                
                });
                break;
                case 3:
                    console.log("Remove product");
                    break;
                    case 4:
                        console.log("update Quantity");
                        break;
                        case 5:
                            console.log("checkout");
                            break;
                            default:
                                console.log("🛑 invalid response ");

    } 
} while(choice!=5);
cin.close();
};
main();