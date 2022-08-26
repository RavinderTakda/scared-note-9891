
import styles from "./Addcart.module.css"




function Addtocartdata(){

    const arr = JSON.parse(localStorage.getItem("cartdata")) || [] 
    


return(

<>



{arr.map((ele)=>

<div className={styles.addcartdiv}>

<img  className={styles.addcartimage} src={ele.image}></img>

<div className={styles.addcartdiv1}>
<p className={styles.h1}>{ele.h1}</p>
<p>{ele.description}</p>
<p className={styles.price}>INR {ele.price}</p>
<button className={styles.button}>-</button>
<button className={styles.button}>1</button>
<button className={styles.button}>+</button>
</div>
<div className={styles.delete} >Delete</div>







</div>





)}



</>



)





}

export default Addtocartdata

   