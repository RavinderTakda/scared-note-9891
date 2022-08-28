
import { Modal } from "@chakra-ui/react"
import { useState } from "react";
import styles from "./Addcart.module.css"
import { Footer } from "./Footer";
import PayModal from "./Modal"







function Addtocartdata(){

    const [amount,setamount] =useState(0)
    const [count,setcount] =useState(1)
   let sum=0
  
    const [isModalVisible, setIsModalVisible] = useState(false);



const arr = JSON.parse(localStorage.getItem("cartdata")) || [] 

    
    const handleclick = () => {
      setIsModalVisible(true);

    };



    const Deleteproduct = (ele) => {

console.log(ele)



arr.splice(ele,1)

localStorage.setItem("cartdata",JSON.stringify(arr))

alert("Item is removed")

window.location.reload()



    }



console.log(sum)




return(

<>






<div className={styles.cartpage}>

{arr.map((ele)=>



<div className={styles.addcartdiv}>

<img  className={styles.addcartimage} src={ele.image}></img>

<div className={styles.addcartdiv1}>
<p className={styles.h1}>{ele.h1}</p>
<p>{ele.description}</p>
<p className={styles.price}>INR {sum=ele.price*count}  </p>







<button className={styles.button}>-</button>
<button className={styles.button}>{count}</button>
<button onClick={()=>setcount(current=>current+1)} className={styles.button}>+</button>
</div>
<div  onClick={()=>Deleteproduct(ele)} className={styles.delete} >Delete</div>


</div>


)}



</div>



<div className={styles.totalamount}>

<div className={styles.check} >


<p>Total Amount:{sum}</p>
<p>Deduction</p>
<div className={styles.promocode} >
<input className={styles.input} placeholder="Apply Promo code here" ></input>
<button className={styles.apply}>Apply</button>


</div>

<button onClick={handleclick}  className={styles.checkout}>Checkout</button>

</div>

</div>


<PayModal isOpen={isModalVisible}

setIsOpen={setIsModalVisible}

/>


<div className={styles.Footer}>

    <Footer/>
</div>



</>



)





}

export default Addtocartdata

   