
import {Input, InputGroup, InputLeftAddon, InputLeftElement, Stack, Checkbox, InputRightElement, Button, Hide} from "@chakra-ui/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"



 export const Singup = ()  => {
const [show,setShow] =useState(false)
const [isAuth,setIsAuth] =useState(false) 


const handlechange = () => {



setIsAuth(!isAuth)


}


if(isAuth){

  return  <Navigate to="/login"  />
  
  }





        
    return (
<>



<Stack   marginLeft="30%"  width="auto" spacing={4} >

<h1 >Create Account</h1>


{/* Name */}
<InputGroup width="35%">

<InputLeftAddon children="Name"/>

<Input   type="tel"  size="md"  placeholder="Name" />  
</InputGroup>




{/* Email */}
<InputGroup width="35%">

<InputLeftAddon children="Email"/>

<Input   type="tel"  size="md"  placeholder="Email" />  
</InputGroup>




{/* password */}
<InputGroup width="35%" >

<InputLeftAddon children="Password"/>

<Input    size="md"  placeholder="Password"  type={show? "text" :"password"}  /> 
<InputRightElement width="15%"  >

<Button  height="90%" onClick={()=>setShow(!show)} >{show?"Hide":"Show"}</Button>

</InputRightElement>
</InputGroup>



<Button width="35%" color="green"  onClick={handlechange} >Submit</Button>
</Stack>
</>


    ) 
      
}