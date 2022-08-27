
import { Modal } from "@chakra-ui/react"
import { useState } from "react";
import styles from "./Addcart.module.css"
import PayModal from "./Modal"







function Addtocartdata(){

    const arr = JSON.parse(localStorage.getItem("cartdata")) || [] 
    
    const [isModalVisible, setIsModalVisible] = useState(false);

let sum=0
    
    const handleclick = () => {
      setIsModalVisible(true);
    };

return(

<>



{arr.map((ele)=>

<div className={styles.addcartdiv}>

<img  className={styles.addcartimage} src={ele.image}></img>

<div className={styles.addcartdiv1}>
<p className={styles.h1}>{ele.h1}</p>
<p>{ele.description}</p>
<p className={styles.price}>INR {ele.price} </p>
<p>{sum+ele.price}</p>



{}

<button className={styles.button}>-</button>
<button className={styles.button}>1</button>
<button className={styles.button}>+</button>
</div>
<div className={styles.delete} >Delete</div>


</div>

)}


<div className={styles.totalamount}>

<div className={styles.check} >

<h1>Your Order</h1>
<p>Total Amount</p>
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

</>



)





}

export default Addtocartdata

   