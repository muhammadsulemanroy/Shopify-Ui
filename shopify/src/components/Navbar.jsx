import React, { useState } from "react";
import './Navbar.css';
import { FaShopify,FaHamburger,FaRegWindowClose} from 'react-icons/fa';
import Button from "./Button";
const Navbar = () => {
  const[showMediaIcons,setShowMediaIcons]=useState(false);
    return (
        <>
          <nav className="main-nav">
          {/*1$t logo part*/}
            <div className="logo-icon">
            <FaShopify/> 
            </div>
            <div className="logo">
              <h1>Shopify</h1>
            </div>
            {/*2nd menu part */}
           <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
             <ul>
               <li>
                 <a href='#'>Solutions</a>
               </li>  

               <li>
                 <a href='#'>Pricing</a>
               </li> 

               <li>
                 <a href='#'>Resources</a>
               </li> 
             </ul>
           </div>

           <div className= "menu-link-right">
             <ul>
               <li>
                 <a>Log<span>in</span></a>
               </li>
             </ul>
            
           </div>
      
     
          <div className= "button-top">
            <Button/>
          </div> 
           {/*hamburger menu*/}

           <button className="hamburger-menu"
           onClick={()=>setShowMediaIcons(!showMediaIcons)}> 
             {showMediaIcons ? <FaRegWindowClose/> :  <FaHamburger/>}
           </button>
      
          </nav>
         
        </>
    );
};

export default Navbar;