import { useState } from "react"
import styles from './Homepage.module.css'
import {Link} from "@chakra-ui/react"
import { Footer } from "./Footer"


const { useEffect } = require("react")

const data1 = () =>{


return fetch("https://safe-beyond-90865.herokuapp.com/data1")


}




const data2 = () =>{


return fetch("https://safe-beyond-90865.herokuapp.com/data2")


}




const data3 = () =>{


    return fetch("https://safe-beyond-90865.herokuapp.com/data3")
    
    
    }





    const data4 = () =>{


        return fetch("https://safe-beyond-90865.herokuapp.com/data4")
        
        
        }







        const data5 = () =>{


            return fetch("https://safe-beyond-90865.herokuapp.com/data5")
            
            
            }







            const data6 = () =>{


                return fetch("https://safe-beyond-90865.herokuapp.com/data6")
                
                
                }







                const data7 = () =>{


                    return fetch("https://safe-beyond-90865.herokuapp.com/data7")
                    
                    
                    }






                    const data8 = () =>{


                        return fetch("https://safe-beyond-90865.herokuapp.com/data8")
                        
                        
                        }






                        const data9 = () =>{


                            return fetch("https://safe-beyond-90865.herokuapp.com/data9")
                            
                            
                            }



































 export const Homepage = () =>{
const [data11,setData11] =useState([])

const [data12,setData12] =useState([])

const [data13,setData13] =useState([])

const [data14,setData14] =useState([])

const [data15,setData15] =useState([])

const [data16,setData16] =useState([])

const [data17,setData17] =useState([])

const [data18,setData18] =useState([])

const [data19,setData19] =useState([])






useEffect(()=>{



data1().then((res)=>res.json()).then((res)=> {
    setData11(res)}).catch((err)=>console.log(err))





    data2().then((res)=>res.json()).then((res)=> {
        setData12(res)}).catch((err)=>console.log(err))

        




        data3().then((res)=>res.json()).then((res)=> {
            setData13(res)}).catch((err)=>console.log(err))

            




            data4().then((res)=>res.json()).then((res)=> {
                setData14(res)}).catch((err)=>console.log(err))

                




                data5().then((res)=>res.json()).then((res)=> {
                    setData15(res)}).catch((err)=>console.log(err))

                    




                    data6().then((res)=>res.json()).then((res)=> {
                        setData16(res)}).catch((err)=>console.log(err))

                        




                        data7().then((res)=>res.json()).then((res)=> {
                            setData17(res)}).catch((err)=>console.log(err))

                            




                            data8().then((res)=>res.json()).then((res)=> {
                                setData18(res)}).catch((err)=>console.log(err))

                                





                                data9().then((res)=>res.json()).then((res)=> {
                                    setData19(res)}).catch((err)=>console.log(err))

                                    
                                        






},[])






return(

<>

{data11.map((ele)=>

<div className={styles.div1}>

<i className={styles.bonusnote} >The Norday Club</i>
<div>
<h1 className={styles.bonusnote}>{ele.h1}</h1>
<p>{ele.description}</p>
<Link to="">
<p>{ele.Link}</p>
</Link>
</div>
<img  className={styles.div1image} src={ele.image} />



</div>



)}





{/* div12 */}

{data12.map((ele)=>

<div>

<div className={styles.div12image}>

<img src={ele.image1} />
<img   src={ele.image2} />



<div className={styles.div12h1}  >
<h1 className={styles.h1} >{ele.h1}</h1>
<p>{ele.description}</p>

<div className={styles.div12link}>

    <Link to="">
<p>{ele.Link1}</p>
</Link>


<Link to="">
<p className={styles.div13link2}>{ele.Link2}</p>
</Link>
</div>
<div className={styles.div12link}>

<Link to="">
<p>{ele.Link3}</p>
</Link>

<Link to="">
<p className={styles.div13link2}>{ele.Link4}</p>
</Link>
</div>

</div>



</div>

</div>
)}





{/* divider */}
<div className={styles.divider} ></div>


<h2  className={styles.noteworthy}>NEW & NOTEWORTHY</h2>





{/* div13 */}
<div className={styles.div13}>
{data13.map((ele)=>



<div className={styles.div13div} >
<img  className={styles.div13image} src={ele.image1} />

<h4 className={styles.div13h1}>{ele.h1}</h4>
<p>{ele.description}</p>

<div className={styles.div13link}>
    <Link>
    
<p>{ele.Link1}</p>
</Link>
<Link>
<p  className={styles.div13link2}>{ele.Link2}</p>
</Link>
</div>


</div>




)}
</div>






{/* div14 */}

{data14.map((ele)=>

<div className={styles.div14}>

<img className={styles.div14image} src={ele.image1} />

<div className={styles.div14div}>

<h1 className={styles.div14popin}>{ele.h1}</h1>

<div className={styles.div14divider} ></div>

<h1 className={styles.div14popin}>{ele.h2}</h1>

<p>{ele.description}</p>

<Link>
<p>{ele.Link1}</p>
</Link>

</div>

</div>


)}






<div className={styles.div14greatdeal} >
<h1 className={styles.div14deals}>Great deals on what you love</h1>
<p>Items similar to what you've browsed are on sale</p>
</div>







{/* div15 */}
<div className={styles.div15}>

{data15.map((ele)=>

<div className={styles.div15data}>

<img src={ele.image1} />
<p>{ele.description}</p>
<p className={styles.div15price}>INR  {ele.price}</p>


</div>


)}

</div>







<div className={styles.divider} ></div>

<div className={styles.thread}>
    <h1 className={styles.thethread}>THE THREAD</h1>
    <p>Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</p>
<Link>
<p>Get Inspired </p>
</Link>


</div>







{/* div16 */}

<div className={styles.div16b} >
{data16.map((ele)=>

<div className={styles.div16}>

<img className={styles.div16image} src={ele.image1} />
<h1 className={styles.div16h1}>{ele.description}</h1>

<Link>
<p>{ele.link}</p>
</Link>


</div>


)}

</div>







<div className={styles.divider} ></div>
<h1 className={styles.shop}>SHOP BY CATEGORY</h1>






{/* div17 */}

<div  className={styles.div16b}>
{data17.map((ele)=>

<div className={styles.div17b}>

<img  className={styles.div17image}src={ele.image1} />
<h1 className={styles.div17h1}>{ele.description}</h1>



</div>


)}
</div>





<div className={styles.currentlyloving}>
<div className={styles.loving}>CURRENTLY LOVING</div>
<h1>Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</h1>
</div>






<div className={styles.div18}>
{data18.map((ele)=>

<img  className={styles.div18image} src={ele.image} />

)}

</div>





 
<div className={styles.trendingyou}>
    <h1 className={styles.trending}>Trending near you</h1>
    <p>The most-viewed items by shoppers in your area</p>
</div>





{/* div19 */}

<div className={styles.div19b}>
{data19.map((ele)=>

<div className={styles.div19}>

<img className={styles.div19image} src={ele.image} />
<p>{ele.description}</p>
<p className={styles.div19price}>INR  {ele.price}</p>




</div>


)}


</div>

<div className={styles.Footer}>

<Footer/>
</div>


</>





)








}