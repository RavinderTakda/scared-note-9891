

import {Link} from "@chakra-ui/react"
import styles from './Navbar.module.css'

 export const Navbar = () => {



return (

<>


{/* first div */}


<div className={styles.navbar}  >
<h1  className={styles.h1} >NORDSTORM</h1>
 <input  className={styles.input}  placeholder="Search for products or brands"></input>
 <div className={styles.div} >
 <p  className={styles.p}>Sing In</p>
 <img   className={styles.image} src="https://cdn-icons-png.flaticon.com/128/2567/2567829.png"/>
 </div>
</div>


{/* divider */}
<div className={styles.divider}></div>


{/* second div  */}


<div className={styles.pages} >
<Link to="">
<h3 style={{color:"red"}} >Sale</h3>
</Link>
<Link to="">
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








</>






)







}