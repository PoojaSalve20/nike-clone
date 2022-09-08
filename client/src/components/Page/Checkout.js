import React from 'react';
import './Style1.css';
const Checkout = () =>{
    return(
        <div>
        <div class="container" style={{marginTop : "70px"}}>
	<div class="row">
		<div class="check col-sm-5">
			<h4>
				How would you like to get your order?
			</h4>
			<p>
				Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email in due course to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for this order, future orders, and any product returns.
			</p>
		</div>
		<div class="check1 col-sm-5">
			<h4>
				Order Summary
			</h4>
			<p >
				Subtotal    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ₹3,495.00
			</p>
			<p>
				Delivery/Shipping   ₹750.00

			</p>
			<hr/>
			<p>
				Total    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;     ₹4,245.00
			</p>
			<hr/>

		</div>
	</div>
	</div>
	<div class="container">
<div class="row">
	<div class="check col-sm-5">
	<div class="square">

		<img src="./img/delivery.svg"/>            Deliver It

	</div>
<div class="button">
	<button type="button" class="btn  rounded-pill border btn-lg text-center 
	 margin-left">Become a Member
</button><br/>
<br/>
<button type="button" class="Login btn rounded-pill border  btn-lg text-center 
	 margin-left">Login
</button>
</div>
</div>
<div class="check col-sm-5">
	<h6 class="heading">Arrives Tue, 27 Jul - Thu, 12 Aug</h6>
	<img class="img" src="./img/nike9.jfif"/>

</div>
	</div>
	<div class=" wrapper container" style={{marginTop : "70px"}}>
	<div class="row">
		<div class="check col-sm-5">
			<h4>
				Enter your name and address:
			</h4>
			<form>
				 
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>


    <input type="text" id="address" name="address1" placeholder="Address Line 1"/>

  
    <input type="text" id="address" name="address2" placeholder="Address Line 2"/>

    
    <input type="text" id="address" name="address3" placeholder="Address Line 3"/>

  <div class="row">
    <div class="col">
      <input type="text" class="form-control"  name="postalcode" placeholder="Postal Code"/>
    </div>
    <div class="col">
      <input type="text" class="form-control"  name="Locality" placeholder="Locality"/>
    </div>
  </div>
    <div class="row">
    	 <div class="col">
    	 	 <select id="inputState" class="form-control">
        <option selected>State/Territory</option>
        <option>Maharashtra</option>
        <option>Andhra Pradesh</option>
        <option>Gujrat</option>
        <option>Gujrat</option>
        <option>Gujrat</option>
        <option>Gujrat</option>
        <option>Up</option>
      </select>
  </div>
   <div class="col">
      <input type="text" class="form-control"  name="country" placeholder="India"/>
    </div>
</div>
			</form>
		</div>
	</div>
</div>
<div class="container" style={{marginTop : "70px"}}>
	<div class="row">
		<div class="check col-sm-5">
			<h4>
				What's your contact information?
			</h4>
			<form>
				 
    <input type="text" id="email1" name="email" placeholder="Email" required/>

    
    <input type="text" id="phone" name="number" placeholder="Phone Number" required/>
</form>		
</div>
</div>
</div>
<div class="container" style={{marginTop : "70px"}}>
	<div class="row">
		<div class="check col-sm-5">
			<h4>
				What's your PAN?
			</h4>
			<form>
				 
    <input type="text" id="pancard" name="pan" placeholder="PAN" required/>
</form>		
</div>
</div>
</div>
<div class="row">
		<div class="check col-sm-5">
<div class="form-check">
  <input class="form-check-input  " type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label " for="defaultCheck1">
    I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement  and Cookie Policy . eShopWorld is a trusted Nike partner.
  </label>
</div>
<button type="button" class=" cnt btn btn-light rounded-pill border  btn-lg text-center 
	 margin-left">Continue
</button>
</div>
</div>
</div>
</div>
    )
}
export default Checkout;