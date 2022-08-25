import { Button, Input } from "@chakra-ui/react"
import styles from './Footer.module.css'
import React from "react"
import {Link} from "@chakra-ui/react"


 export const Footer = () => {


return(

<>

<div  className={styles.emailupdate}>

<p className={styles.get} >Get Email Updates:</p>
<input className={styles.input} placeholder="Email Address"></input>
<button className={styles.signup} >Sign up</button>

</div>




<div className={styles.footerbackgroundcolor}>

<div className={styles.footer}>

<div className={styles.footerdiv}>


<Link to="">
<h1>Customer Service</h1>
</Link>

<Link to="">
<p>Contact Us</p>
</Link>

<Link to="">
<p>Order Status</p>
</Link>

<Link to="">
<p className={styles.div}>Shipping</p>
</Link>

<Link to="">
<p>Return Policy & Exchanges</p>
</Link>

<Link to="">
<p>Price Adjustments</p>
</Link>

<Link to="">
<p>Gift Cards</p>
</Link>

<Link to="">
<p>FAQ</p>
</Link>

<Link to="">
<p>Product Recalls</p>
</Link>


</div>






<div className={styles.footerdiv}>

<Link to="">
<h1>About Us</h1>
</Link>

<Link to="">
<p>Careers</p>
</Link>

<Link to="">
<p>Corporate Social Responsibility</p>
</Link>

<Link to="">
<p>Diversity, Inclusion & Belonging</p>
</Link>

<Link to="">
<p>Get Email Updates</p>
</Link>

<Link to="">
<p>Nordstrom Blog</p>
</Link>

<Link to="">
<p>The Thread</p>
</Link>

<Link to="">
<p>Nordy Podcast</p>
</Link>


</div>







<div className={styles.footerdiv}>

<Link to="">
<h1>Stores & Services</h1>
</Link>

<Link to="">
<p>Find a Store</p>
</Link>

<Link to="">
<p>Free Style Help</p>
</Link>

<Link to="">
<p>Alterations & Tailoring</p>
</Link>

<Link to="">
<p>Pop-In Shop</p>
</Link>

<Link to="">
<p>Virtual Events</p>
</Link>


<Link to="">
<p>Spa Nordstrom</p>
</Link>

<Link to="">
<p>Nordstrom Restaurants</p>
</Link>

<Link to="">
<p>Nordstrom Local</p>
</Link>


</div>







<div className={styles.footerdiv}>

<Link to="">
<h1>Nordstrom Card & Rewards</h1>
</Link>

<Link to="">
<p>The Nordy Club Rewards</p>
</Link>

<Link to="">
<p>Pay My Bill</p>
</Link>

<Link to="">
<p>Manage My Nordstrom Card</p>
</Link>


</div>






<div className={styles.footerdiv}>


<Link to="">
<h1>Nordstrom, Inc.</h1>
</Link>

<Link to="">
<p>Nordstrom Rack</p>
</Link>

<Link to="">
<p>Nordstrom Canada</p>
</Link>

<Link to="">
<p>Investor Relations</p>
</Link>

<Link to="">
<p>Press Releases</p>
</Link>

<Link to="">
<p>Nordstrom Media Network</p>
</Link>


</div>



<div> 

 <img className={styles.socialmediaiconimage} src="https://pnggrid.com/wp-content/uploads/2021/12/Circle-Mobile-Phone-Icon-Png.png"></img>  

 <Link to="">
 <p>Get our apps</p> 
 </Link>




<div className={styles.socialmediaicon}>

<img className={styles.instagramimage} src="https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/instagram-colourful-icon.png"/>
<img  className={styles.pinterestimage} src="https://americanbeautycollege.edu/wp-content/uploads/2017/02/Pinterest-Icon.png"/>
<img className={styles.twitterimage}  src="https://static.vecteezy.com/system/resources/thumbnails/006/057/998/small/twitter-logo-on-transparent-background-free-vector.jpg"/>
<img  className={styles.facebookimage} src="https://thumbs.dreamstime.com/b/print-204671996.jpg"/>
<h1  className={styles.plussign}>+</h1>

</div>


</div>

</div>

</div>

</>




)




}