import React from 'react';
import '../Page/Home.css'
const Men = () => {
    return(
        <div>
            {/* catbat */}
            <div className="container-fluid">
           
           <nav class="navbar navbar-expand-lg navbar-light navposition ">
     <a class="navbar-brand brand" href="#">Men</a>
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
            {/* main banner section */}
             <div className="container ."> 
                    <div className="row .">
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 ." >
                            <img className=""style={{width:"100%",height:"auto"}}  src="./img/nikebanner.jpg"/>
                        </div>
                    </div>
                    <div className="row .">
                        <div className=" mainbanner col-md-8  offset-md-2 mt-4  ."style={{fontWeight:"500"}} >
                           <p style={{fontSize:"60px",fontWeight:"900",lineHeight:"1.0"}}>YOUR NIKE<br/>CONNECTION</p>
                           <p>More sport, more inspiration, more Nike</p>
                           <button className="btn btn-dark rounded-pill">Get Your Greate</button>
                        </div>
                    </div>
                </div> 
                
                {/* Emotion in Motion section */}
                <div className="container  mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4></h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-12  emotionsection">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"auto"}}  src="./img/dontmissbanner.png"/>
                                <div class="emotion-bottom-right">
                                    <h5>Emotion in Motion</h5>
                                    <p classname="emotionsheading " style={{fontSize:"60px",fontWeight:"900",lineHeight:"1.0"}}>
                                    Rawdacious Pack</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trending section */}
                <div className="container  mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>Trending</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  trendingsection1">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"600px"}}  src="./img/mentrendingimg2.jpg"/>
                                <div class="bottom-right1">
                                    <h3>Rawdacious Pack</h3>
                                    <button className="btn btn-light rounded-pill">Shop</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 trendingsection2">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"600px"}}  src="./img/mentrendingimg1.jpg"/>
                                <div class="bottom-right2">
                                    <h3>Rawdacious Pack</h3>
                                    <button className="btn btn-dark rounded-pill">Learn More</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 

                 {/* Dont miss section */}
                 <div className="container  mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>Don't Miss</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-12  dontmisssection">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"auto"}}  src="./img/mengroupimg.jpg"/>
                                <div class="dontmiss-bottom-right">
                                    <h5>Featured Style</h5>
                                    <p classname="dontmissheading " style={{fontSize:"60px",fontWeight:"900",lineHeight:"1.0"}}>
                                        NEW THIS<br/> SEASON</p>
                                    <button className="btn btn-dark rounded-pill dontmiss-button">Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* The Latest section */}
                <div className="container mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>The Latest</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 ." >
                            <img className=""style={{width:"100%",height:"auto"}}  src="./img/thelatestbanner.jpg"/>
                        </div>
                    </div>
                    <div className="row .">
                        <div className=" thelatestbanner latestbutton col-md-8  offset-md-2 mt-4  ."style={{fontWeight:"500"}} >
                           <p style={{fontSize:"60px",lineHeight:"1.0",fontWeight:"900"}}>NIKE MOVEMENT<br/>CHALLENGE: WEEK 2</p>
                           <p>Conqure this Week's challenge on the NRC or NTC Apps from 19th-25th July to access the<br/>Champions Locker<br/>Nwe Member-only products will be added weekly to the Champions Locker.</p>
                            <div className="row justify-content-center  .">
                                    <div className=" col-3 col-md-2 justify-content-center .">
                                        <button className="btn btn-dark rounded-pill ">Start a Run</button>
                                    </div>
                                    <div className="col-4 col-md-2 justify-content-center .">
                                        <button className="btn btn-dark rounded-pill ">Start a Workout</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*More Nike section  */}
                 <div className="container mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>More Nike</h4>
                            </div>
                        </div>
                    
                    <div className="col-12 col-md-4 mt-1 morenike1">
                        <div className="morenike1.1">
                            <img style={{width:"100%",height:"auto"}}  src="./img/menimg1.jpg"/>
                            <div class="bottom-right1">
                                <button className="btn btn-light rounded-pill">Tops & T-Shitrs</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-12 col-md-4 mt-1 morenike2">
                        <div className="morenike2.1">
                            <img style={{width:"100%",height:"auto"}}  src="./img/menimg2.jpg"/>
                            <div class="bottom-right1">
                                <button className="btn btn-light rounded-pill">Shorts</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-12 col-md-4 mt-1 morenike3">
                        <div className="morenike3.1">
                            <img style={{width:"100%",height:"auto"}}  src="./img/menimg3.jpg"/>
                            <div class="bottom-right1">
                                <button className="btn btn-light rounded-pill">Pants & Leggings</button>
                            </div>
                        </div>
                    </div>  
                    </div>  
                 </div>

        </div>
    )
       
    
}
export default Men;