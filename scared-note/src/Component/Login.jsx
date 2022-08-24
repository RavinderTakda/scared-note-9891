import { Button, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Link, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"




 export const Login = () => {
const [showpass,setShowpass] =useState(false)



// if(true){


// return <Navigate to="/signup"/>

// }





return(
<>


<Stack marginLeft="40%" spacing={4}>

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
</Stack>

</>


)


}

