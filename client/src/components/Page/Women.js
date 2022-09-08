import React from 'react';


const Women = () => {
    return(
       
       <div>
           {/* catbar */}
		   <div className="container-fluid">
           
        <nav class="navbar navbar-expand-lg navbar-light navposition ">
  <a class="navbar-brand brand" href="#">Women</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav navcenter ">
      <li class="nav-item ">
        <a class="nav-link" href="#">Shoes <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Clothing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pants & Leggings</a>
      </li>
    
    </ul>
  </div>
</nav>

</div>
           {/* end catbar */}
<div class="container" >
	 <img class="banner" style={{marginTop : "70px"}} src = "./img/mainbanner.jpg"/>
	</div>
	<div class="container">
	 <h1 class = "heading">YOUR NIKE</h1>
     <h1 class = "heading1">CONNECTION</h1>
	 <p class = "text">More sport, more inspiration, more Nike!</p>
	<center><button type="button" class= " bannerbutton btn btn-dark rounded-pill btn-lg text-center ">Get Your Great</button></center>
	</div>
    <div>
<div class="container banner embed-responsive-item" style={{marginTop : "50px"}} >
	<video class="video1" width="100%" controls autoplay muted loop >
        <source src="./img/movie.mp4" type="video/mp4"/>

  </video>
  <div class="positiondiv">
    <div class="float-left vtitle"> 
        <h5>Emotion in Motion</h5>
        <p class="vheading">RAWDACIOUS PACK</p>
    </div>
    <br/>
    <button type="button" class="vbutton btn btn-dark rounded-pill btn-lg text-center 
	 ">Shop
</button>
</div>
  </div> 
  </div>
	<div class="container" style={{marginTop : "50px"}}>
		 <h4>The Latest</h4>
		 <div class="row"style={{marginTop : "30px"}}>
		 <div class="col-sm-6">
		 	 <img class="banner"  src = "./img/l1.jpg"/>
		 	 <p class="txt">The best of Nike,on your terms. </p>
		 	<a href="productlist.html"> <button className="btn btn-light " type="button" class="btn2">Shop Now</button></a>
		 </div>
		 	 <div class="col-sm-6">
		 	 <img class="banner"  src = "./img/l2.jpg"/>
		 	 <p class="txt1" style={{Color: "white"}}>Your New Fav Fit</p>
		 	 <a href="productlist.html"><button type="button" class="btn3">Shop Now</button></a></div>
		 	</div>
	</div>
	<div class="container" style={{marginTop : "50px"}} >
		<h4 >Featured</h4>
	        <div class="row"style={{marginTop : "30px"}}>
	        	<div class="col-md-12">
		 	 		<img class="banner"  src = "./img/featureimg.jpg"/>
					<div class="fpositiondiv">
    					<div class="float-left ftitle"> 
        					<h5 className="marginLeft" >Blazer Low Platform</h5>
        					<p class="fheading">TAKE YOUR <br/>PLATFORM </p>
						
    					</div>
    					<br/>
    					<button type="button" class="fbutton btn btn-dark rounded-pill btn-lg text-center 
	 					">Shop
						</button>
					</div>
				</div>
				
		 	</div>
	</div>
		<div class="container dontmiss" style={{marginTop :"50px"}} >
		 <h4 >Don't Miss</h4>
	        <div class="row"style={{marginTop : "30px"}}>
		 	 <img class="banner"  src = "./img/dontmissbanner.jpg"/>
		 	 </div>
		 </div> 
	 <div class="container " style={{marginTop :"50px"}}>
        <h1 class = "responsive">AS CLOSE AS YOUR<br/> 
        CREW
        </h1>
	 	<br/>

	 	<p class = "text">Sweat it out in a sport bra that's as supportive as your BFF</p>
			<center>
				<button type="button" class="btn btn-dark rounded-pill btn-lg margin-left" value="">Shop Bras
				</button>
			</center>
	 </div>

	<div class="container"  style={{marginTop :"50px"}} >
		 <h4>50 Years of Swoosh</h4>
</div>
		 <div class="scrollmenu">
	       <div class="row" style={{marginTop :"30px"}}>
		 <div class="col-sm-4">
		 	 <img class="banner"  src = "./img/s1.jpg"/>
			  <div class="float-left scrollbutton"> 
        		<button type="button" class=" sliderbutton btn btn-dark rounded-pill btn-lg text-center">sports Bras</button>
			  </div>
		 </div>

		 	 <div class="col-sm-4">
		 	 <img class="banner"  src = "./img/s2.jpg"/>
			  <div class="float-left scrollbutton"> 
        		<button type="button" class=" sliderbutton btn btn-dark rounded-pill btn-lg text-center">Shorts </button>
			  </div>
		 	</div>
              
		 	<div class="col-sm-4">
		 	 <img class="banner"  src = "./img/s3.jpg"/>
			  <div class="float-left scrollbutton"> 
        		<button type="button" class=" sliderbutton btn btn-dark rounded-pill btn-lg text-center">Top & T-Shits</button>
			  </div>
		 	</div>
			 
		 </div>
		</div>
		
	</div>
    
    )
}
export default Women;