import { Button, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Footer } from "./Footer"
import styles from "./Addcart.module.css"

import {Link} from "react-router-dom"
const logindata = () => {

return axios.get("https://arcane-chamber-85340.herokuapp.com/singup",{

params:{

    email:""

}


})


}





 export const Login = () => {
const [showpass,setShowpass] =useState(false)



// if(true){


// return <Navigate to="/signup"/>

// }





return(
<>


<Stack  marginTop="5%"  marginLeft="40%" spacing={4}>

<Heading/>

<InputGroup  width="35%" >
<InputLeftAddon/>
<Input  placeholder="Email"/>
</InputGroup>




<InputGroup  width="35%" >
<InputLeftAddon/>
<Input   type={showpass?"text":"password"}  placeholder="Password"/>
<InputRightElement width="20%" >
<Button  onClick={()=> setShowpass(!showpass)} >{showpass?"Hide":"Show"}</Button>

</InputRightElement>
</InputGroup>


<Link to="/">
<Button  width="35%" color="green"  >Submit</Button>

</Link>
</Stack>


<div className={styles.Footer}>

<Footer/>

</div>
</>


)


}

