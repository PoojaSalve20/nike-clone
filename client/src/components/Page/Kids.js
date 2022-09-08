import React from 'react';

const Kids = () => {
    return(
        <div>
            {/* Kids main section */}
            <div className="container  mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>Kids</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-12  dontmisssection">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"auto"}}  src="./img/mengroupimg.jpg"/>
                                <div class="dontmiss-bottom-right">
                                    <h5>Just in</h5>
                                    <p classname="dontmissheading " style={{fontSize:"60px",fontWeight:"900",lineHeight:"1.0"}}>
                                        SPACE JAM</p>
                                        <p>Suit up for the jam exclusively on the Nike APP</p>
                                    <button className="btn btn-dark rounded-pill dontmiss-button">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kids Trending section */}
                <div className="container mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>Trending</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 ." >
                            <img className=""style={{width:"100%",height:"auto"}}  src="./img/nike-kids.jpg"/>
                        </div>
                    </div>
                    <div className="row .">
                        <div className=" thelatestbanner latestbutton col-md-8  offset-md-2 mt-4  ."style={{fontWeight:"500"}} >
                           <p style={{fontSize:"60px",lineHeight:"1.0",fontWeight:"900"}}>MATCH IT UP</p>
                           <p>Bras and Leggings paired for all styles of play </p>
                            <div className="row justify-content-center  .">
                                    <div className=" col-3 col-md-2 justify-content-center .">
                                        <button className="btn btn-dark rounded-pill ">Shop Bras</button>
                                    </div>
                                    <div className="col-4 col-md-2 justify-content-center .">
                                        <button className="btn btn-dark rounded-pill ">Shop Leggings</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kids The Essential section */}

                <div className="container mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>The Essential</h4>
                            </div>
                        </div>
                        <div className = "col-12 col-md-6">
                        <div className="row">
                                <div className="col-12 mb-3 col-md-12">
                                    <div className="absoluteimg">
                                        <img style={{width:"100%",height:"100%"}}  src="./img/kidsimg1.jpg"/>
                                        <div class="kidsbottom-right1">
                                            <h3>T-Shirts</h3>
                                            <button className="btn btn-dark rounded-pill">Shop</button>
                                        </div>
                                    </div>
                                </div>  
                            </div>   
                        </div>
                        <div className = "col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 mb-2 col-md-12">
                                    <div className="absoluteimg">
                                        <img style={{width:"100%",height:"100%"}}  src="./img/kidsimg2.jpg"/>
                                        <div class="kidsbottom-right1">
                                            <h3>Shorts</h3>
                                            <button className="btn btn-dark rounded-pill">Shop</button>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col-12  col-md-12">
                                    <div className="absoluteimg">
                                        <img style={{width:"100%",height:"100%"}}  src="./img/kidsimg3.jpg"/>
                                        <div class="kidsbottom-right1">
                                            <h3>Bras</h3>
                                            <button className="btn btn-dark rounded-pill">Shop</button>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            
                        </div>
                     </div>   
                </div>

                 {/* Stay Active at home section */}
                 <div className="container  mt-5 ."> 
                    <div className="row .">
                        <div className="row mb-4 .">
                            <div className="col-12 col-md-12 flot-left ">
                                <h4>Stay Active at Home</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  trendingsection1">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"600px"}}  src="./img/kidsactive1.jpg"/>
                                <div class="bottom-right1">
                                    <h3>How to Motivate Your Kids to Move</h3>
                                    <button className="btn btn-light rounded-pill">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 trendingsection2">
                            <div className="absoluteimg">
                                <img style={{width:"100%",height:"600px"}}  src="./img/kidsactive2.jpg"/>
                                <div class="bottom-right2">
                                    <h3>Help Your Kids Fall in Love with Movement</h3>
                                    <button className="btn btn-dark rounded-pill">Learn More</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 

        </div>
    )
}
export default Kids;