import { useEffect } from "react"
import { useState } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import styles from "./Product.module.css"

const arr = JSON.parse(localStorage.getItem("cartdata")) || [] 
console.log(arr)


const Datadetails = ({sort}) =>{

console.log(sort)
return fetch(`https://immense-river-16352.herokuapp.com/productdata2?_sort=price&_order=${sort}`)




}



const addtocart = (ele) => {

console.log(ele)
    const arr = JSON.parse(localStorage.getItem("cartdata")) || [] 
    arr.push(ele)
    localStorage.setItem("cartdata",JSON.stringify(arr))

}







export const ProductPage = () => {
const [data,setdata] =useState([])
const [sort,setSort] =useState("")



useEffect(()=>{

Datadetails({sort}).then((res)=>res.json()).then((res)=>{
setdata(res)
console.log(res)}
).catch((err)=>console.log(err))



},[sort])



    





return(

<>

<>

{/* <Navbar/> */}


<div className={styles.sidebar} >

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>

<p  className={styles.sidebartext}>Size</p>
<p  className={styles.sidebartext}>+</p>

</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p  className={styles.sidebartext}>Color</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Brand</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Feature</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Fit</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Material</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Neck Style</p>
<p className={styles.sidebartext}>+</p>
</div>


<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Occasion</p>
<p className={styles.sidebartext}>+</p>
</div>


<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Price</p>
<p className={styles.sidebartext}>+</p>
</div>


<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Sale</p>
<p className={styles.sidebartext}>+</p>
</div>


<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Sleeve Length</p>
<p className={styles.sidebartext}>+</p>
</div>


<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Sports League</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Sports Team</p>
<p className={styles.sidebartext}>+</p>
</div>

<div className={styles.divider}></div>

<div className={styles.sidebardiv}>
<p className={styles.sidebartext}>Style</p>
<p className={styles.sidebartext}>+</p>
</div>



</div>









<select onClick={(e)=>setSort(e.target.value)} className={styles.productselect}>
    <option value="Sort by customer rating">Sort by customer rating</option>
    <option value="Sort by featured">Sort by featured</option>
    <option value="Sort by newest">Sort by newest</option>
    <option value="Sort by percent off">Sort by percent off</option>
    <option value="desc">Sort by price:high to low</option>
    <option value="asc">Sort by price:low to high</option>
</select>




<div className={styles.productpage}>
{data.map((ele)=>
<div className={styles.productcontainer}>

<img src={ele.image}/>
<h1 className={styles.producth1}>{ele.h1}</h1>
<p>{ele.description}</p>
<p className={styles.productprice}>INR  {ele.price}</p>
<div  onClick={()=>addtocart(ele)} className={styles.quickshop}>Quick Shop</div>


</div>

)}

</div>




</>

<>
{/* <Footer/> */}
</>

</>

)





}