import React from "react";
import { FaShopify,FaFacebook,FaInstagram,FaYoutube,FaTiktok,FaLinkedin} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
       <>
        <div className="foot">
        <br/>
        <br/>
        <br/>
    <div className="foot-data">

        <div className="shopify-bottom"><FaShopify/></div>
  
          <div className="one-group-foot">
           <div className="foot-one">
            <h4>Shopify</h4> 
            <br/>
            <br/>
             <p>About Shopify</p>
             <p>Careers</p>
             <p>Investors</p>
             <p>press and media</p>
             <p>Partners</p>
             <p>Affiliates</p>
             <p>Legal</p>
             <p>Service status</p>
           </div>  


           
           <div className="foot-two">
            <h4>Support</h4> 
            <br/>
            <br/>
             <p>Merchant Support</p>
             <p>Help center</p>
             <p>Hire and expert</p>
             <p>Shopify Community</p>
             <p>Shopify Events</p>
            
           </div>  
           </div>

         <div className="two-group-foot">
           <div className="foot-three">
              <h4>Developers</h4>
              <br/>
              <br/>
              <p>Shopify.dev</p>
              <p>Api.documentation</p>
              <p>Dev Degree</p>

           </div>
           <div/>

           <div className="foot-four">
              <h4>Products</h4>
              <br/>
              <br/>
              <p>Shop</p>
              <p>Shop Pay</p>
              <p>Shopify Plus</p>
              <p>Shopify Fulfillment Network</p>
              <p>Linkpop</p>
              <p>Hydrogen and oxygen</p>
              <p>Commerce Components</p>

           </div>
          </div>

</div>
<br/>
<br/>
<hr/>
<br/>
<br/>

<div className="last">

<div className="last-left">
  <h4>USA</h4>
  <h4>Privacy Policy</h4>
  <h4>Sitemap</h4>
 </div>

<div className="last-icons">
<FaFacebook/>
<FaInstagram/>
<FaYoutube/>
<FaTiktok/>
<FaLinkedin/>
</div>

</div>
        
        </div>
       </>
    );
};

export default Footer;