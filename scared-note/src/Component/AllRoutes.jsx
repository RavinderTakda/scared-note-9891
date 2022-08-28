import {Routes,Route} from "react-router-dom"
import Addtocartdata from "./Addtocart"

import { Homepage } from "./Homepage"
import { Login } from "./Login"
import { ProductPage } from "./Productpage"
import { Singup } from "./Signup"



export const AllRoutes = () => {


return(

<>

<Routes>

<Route path="/"  element={<Homepage/>}   />
<Route path="/login"  element={<Login/>}   />
<Route path="/signup"  element={<Singup/>}   />

<Route path="/productpage"  element={<ProductPage/>}   />
<Route path="/cart"  element={<Addtocartdata/>}   />



</Routes>





</>






)




}
