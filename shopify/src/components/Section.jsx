import React from "react";
import './Section.css';
import ButtonTwo from "./ButtonTwo";
const Section=()=> {
 return(
    <>
    <br/><br/><br/><br/>
    <div className="section-top">
     <h1>Easily build and run your ecommerce <br/>website</h1>
   </div><br/><br/>
   <div className="section-one">
   <h1>Everything you need to manage your beautiful, fully-<br/>featured store.</h1>
   </div>
   <br/>
   <br/>
   <br/>
  <div className="pic1">
   <img src="header-small-fab926874fb4fd301e26f79de634258c2bd7b872dbea986794afd0654f72ec95.webp" alt="image"/>
   </div>
 <br/>

 <div className="free-trial">
<h1> Start your free 3-day trial today!</h1>
 </div>

 <br/>
   <div className="box">
      <input type="email" placeholder="Enter your email address"/>
      <ButtonTwo/>
   </div>

   <br/>
   <br/>
   <hr className="one"/>
   <br/>
   <br/>
   <br/>

<div className="ecommerce-portion">

<div className="ecommerce-anchors">
<p>Introduction</p>
<p>Ecommerce Website</p>
<p>Online shopping cart</p>
<p>Ecommerce hosting</p>
<p>Ecommerce cms</p>
</div>

<div className="ecommerce-shopify">
<h1>Shopify ecommerce</h1>
Shopify includes everything you need to <br/>manage your ecommerce website all in one <br/>place. Start your free trial and secure your<br/> Shopify store's domain in seconds, then <br/> upload your product and start <a>selling online.</a>
</div>

<div className="pic-3">
   <img src="feature-1-small-e0df9304b151bd2fcda1f1381b6a5d41a8038fa90dc4e711b47016fe9bb4706b.webp"/>
</div>  
</div>  

<br/>
<br/>
<hr className="two"/>


<div className="Add-products-portion">
<div className="pic-2">
   <img src="feature-2-small-a53d6df3d5e80f9a10353082bdec2f8d2dd6a4afc57e6b2a6824ecab4f2a9134.avif"/>
</div>

<div className="Add-products-para">
<h1>Add products and<br/> manage your inventory</h1><br/>
<p>Add your products, upload their photos, set <br/>stock levels and more to build out your <br/>place. Start your free trial and secure your<br/> ecommerce website’s inventory.</p> <br/>
</div>
</div>
<br/>
<br/>
<hr className="three"/>
<br/>
<br/>

<div className="add-product-up">
<div className="add-product-top">
<div className="Add-product">
   <h3>Add product images</h3><br/>
   <p>Upload your product images. No<br/> need to worry about resizing or <br/>optimization — we do that for you.</p>
</div>

<div className="description"><br/>
   <h3>Description & details</h3><br/>
   <p>Write a product description and enter<br/> the product’s weight, manufacturer, <br/>size, color, and other such details.</p>
</div>
</div>
<br/>

<div className="add-product-bottom">
<div className="manage">
   <h3>Manage inventory</h3><br/>
   <p>The inventory editor combined with<br/> Shopify’s order tracker make <br/>managing your inventory a breeze.</p>
</div>

<div className="description-2"><br/>
   <h3>Bulk import your inventory</h3><br/>
   <p>You can add your products one at a<br/> time or bulk-import all products from<br/>an Excel or CSV file, eBay, or</p>Magento.
</div>
</div>
</div>

<br/>
<br/>
<br/>
<hr className="four"/>
<br/>
<br/>

<div className="multiple-staff">
  <div className="multiple-staff-para">
   <h1>Set up multiple staff login</h1>
   <br/>
   <p>Shopify lets you quickly create staff accounts for your ecommerce website. These accounts are <br/>used to log in to the administration area where you manage your online store.<br/><br/><br/>

You can restrict permission of staff accounts so that only certain people can process orders,<br/> manage inventory, manage the blog and web pages, install apps or other things in the<br/> administration area.</p>
</div>


<div className="section-last">
<div className="last-sentence">
<h1>Start your 3-day free trial today!</h1>
</div>
<div className="box-last">
      <input type="email" placeholder="Enter your email address"/>
      <ButtonTwo/>
</div>
</div>
</div>

<br/>

<div className="credit-card-para">
<p>Try Shopify free for 3 days, no credit card required. By entering <br/> your email, you agree to receive marketing emails from Shopify.</p>
</div>
<br/>
<br/>
</>
 )

}
export default Section;