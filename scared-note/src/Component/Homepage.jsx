import { useState } from "react"

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

<div>

<h1>The Norday Club</h1>
<h1>{ele.h1}</h1>
<p>{ele.description}</p>
<p>{ele.Link}</p>
<img src={ele.image} />



</div>



)}






{data12.map((ele)=>

<div>

<img src={ele.image1} />
<img src={ele.image2} />
<h1>{ele.h1}</h1>
<p>{ele.description}</p>
<p>{ele.Link1}</p>
<p>{ele.Link2}</p>
<p>{ele.Link3}</p>
<p>{ele.Link4}</p>




</div>


)}


{data13.map((ele)=>

<div>

<img src={ele.image1} />

<h1>{ele.h1}</h1>
<p>{ele.description}</p>
<p>{ele.Link1}</p>
<p>{ele.Link2}</p>

</div>


)}






{data14.map((ele)=>

<div>

<img src={ele.image1} />

<h1>{ele.h1}</h1>
<h1>{ele.h2}</h1>
<p>{ele.description}</p>
<p>{ele.Link1}</p>


</div>


)}




{data15.map((ele)=>

<div>

<img src={ele.image1} />
<p>{ele.description}</p>
<p>{ele.price}</p>


</div>


)}






{data16.map((ele)=>

<div>

<img src={ele.image1} />
<p>{ele.description}</p>
<p>{ele.link}</p>


</div>


)}






{data17.map((ele)=>

<div>

<img src={ele.image1} />
<p>{ele.description}</p>



</div>


)}



{data18.map((ele)=>

<div>

<img src={ele.image} />




</div>


)}




{data19.map((ele)=>

<div>

<img src={ele.image} />
<p>{ele.description}</p>
<p>{ele.price}</p>




</div>


)}



</>





)








}