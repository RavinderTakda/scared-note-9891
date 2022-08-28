

// import {Link} from "@chakra-ui/react"
import styles from './Navbar.module.css'
import {Link} from "react-router-dom"

 export const Navbar = () => {



return (

<>


{/* first div */}


<div className={styles.container}>

<div className={styles.navbar}  >

    <Link to="/">
<h1  className={styles.h1} >NORDSTORM</h1>

</Link>
 <input  className={styles.input}  placeholder="Search for products or brands"></input>
 <div className={styles.div} >


    <Link to="/signup">
 <p  className={styles.p}>Sign In</p>

 </Link>


 <Link to="/cart">
 <img   className={styles.image} src="https://cdn-icons-png.flaticon.com/128/2567/2567829.png"/>
 </Link>
 </div>
</div>


{/* divider */}
<div className={styles.divider}></div>


{/* second div  */}


<div className={styles.pages} >
<Link to="">
<h3 style={{color:"red"}} >Sale</h3>
</Link>
<Link to="/productpage">
<h3>Women</h3>
</Link>
<Link to="">
<h3>Men</h3>
</Link>
<Link to="">
<h3>Kids</h3>
</Link>
<Link to="">
<h3>Young Adult</h3>
</Link>
<Link to="">
<h3>Activewear</h3>
</Link>
<Link to="">
<h3>Home</h3>
</Link>
<Link to="">
<h3>Beauty</h3>
</Link>
<Link to="">
<h3>Designer</h3>
</Link>
<Link to="">
<h3>Gifts</h3>
</Link>
<Link to="">
<h3>Brands</h3>
</Link>




</div>






</div>

</>






)







}