
import {Input, InputGroup, InputLeftAddon, InputLeftElement, Stack, Checkbox, InputRightElement, Button, Hide} from "@chakra-ui/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

import {Link} from  "react-router-dom"
import { Footer } from "./Footer"
import styles from "./Addcart.module.css"








 export const Singup = ()  => {
const [show,setShow] =useState(false)
const [isAuth,setIsAuth] =useState(false)
const [signupdata,setSignupdata] = useState({name:"",email:"",password:""})


const handlechange = (signupdata) => {

  console.log(signupdata.email,signupdata.password,signupdata.name)
 


  axios.post("https://arcane-chamber-85340.herokuapp.com/singup",{

"email":signupdata.email,
"name":signupdata.name,
"password":signupdata.password


  })

}



const data = () => {

return  axios.get("https://arcane-chamber-85340.herokuapp.com/singup")

}




useEffect(()=>{


data().then((res)=>console.log(res)).catch((err)=>console.log(err))
  

},[])






const dataupload = (e) => {

  const {name,value}=e.target
  
  setSignupdata({...signupdata,[name]:value})


}
















        
    return (
<>



<Stack  marginTop="5%"  marginLeft="30%"  width="auto" spacing={4} >

<h1 >Create Account</h1>








{/* Name */}
<InputGroup width="35%">

<InputLeftAddon children="Name"/>

<Input  onChange={dataupload}   name="name"  type="tel"  size="md"  placeholder="Name" />  
</InputGroup>










{/* Email */}
<InputGroup width="35%">

<InputLeftAddon children="Email"/>

<Input   onChange={dataupload}  name="email"   type="tel"  size="md"  placeholder="Email" />  
</InputGroup>










{/* password */}
<InputGroup width="35%" >

<InputLeftAddon children="Password"/>

<Input  onChange={dataupload}    name="password"  size="md"  placeholder="Password"  type={show? "text" :"password"}  /> 


<InputRightElement width="15%"  >
<Button  height="90%" onClick={()=>setShow(!show)} >{show?"Hide":"Show"}</Button>
</InputRightElement>


</InputGroup>


<Link to="/login">
<Button  width="35%" color="green"  onClick={()=>handlechange(signupdata)} >Submit</Button>

</Link>
</Stack>


<div className={styles.Footer} >

<Footer/>
</div>


</>


    ) 
      
}