import { useEffect } from "react"
import { useState } from "react"


const Datadetails = () =>{


return fetch("https://immense-river-16352.herokuapp.com/productdata2")




}






export const ProductPage = () => {
const [data,setdata] =useState([])



useEffect(()=>{

Datadetails().then((res)=>res.json()).then((res)=>{
setdata(res)
console.log(res)}
).catch((err)=>console.log(err))



},[])








return(

<>


{data.map((ele)=>
<div>

<img src={ele.image}/>
<h1>{ele.h1}</h1>
<p>{ele.description}</p>
<p>{ele.price}</p>


</div>

)}




</>





)





}