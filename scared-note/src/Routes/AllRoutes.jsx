import { Route, Routes } from "react-router-dom"
import { Login } from "../Component/Login"
import { Singup } from "../Component/Signup"




 
export const AllRoutes = () => {


return (

<Routes>
<Route path="/singup"  element={<Singup/>} />
<Route path="/login"  element={<Login/>} />

</Routes>


)


}