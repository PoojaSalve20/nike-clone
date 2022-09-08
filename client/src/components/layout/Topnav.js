import React from 'react';
import '../layout/toggle.css';
import  { Link } from 'react-router-dom';

const Topnav = ()=>{
    return(
        <div>
            <div  className ="topnav" style={{background:"#e5e5e5"}}>
                <ul className="topnavul" style={{listStyle:"none" , display:"inline"}}>
                    <li className="topnavli">
                    <Link to ="#myModal"><a style={{color:"black" }} href="#myModal" className="trigger-btn" data-toggle="modal">Sign In</a> |</Link>
                <div id="myModal" className="modal fade">
                    <div className="modal-dialog modal-login">
                        <div className="modal-content">
                            <div className="modal-header"> 
                                <div className="nikelogo col-md-12">
                                    <div className="row justify-content-center">
                                        <img style={{height: "17px", width: "324"}} src="assets/img/nikelogo.png"/>
                                    </div>
                                    <div className="row justify-content-center">        
                                        <h5 className="modal-title">YOUR ACCOUNT FOR <br/> EVERYTHING NIKE</h5>
                                    </div>
                                </div>  
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="false">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email address" required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="required"/>         
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="checkbox"/>keep me signed in
                                        </div>
                                        <div className="col  Forget">
                                            <a href="#">Forget password?</a>
                                        </div>
                                    </div>
                                    <div className="col p-4" >
                                        <p className="text-align-center">By logging in, you agree to Nike's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a></p>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="submit" className="btn btn-primary btn-block btn-lg" value="SIGN IN"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <p>Not Member?</p><a href="#myModdal"> join us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
                    <li>
                  <Link to="#myModall"><a style={{color:"black" ,}} href="#myModall" className="trigger-btn" data-toggle="modal">join Us</a></Link>  
            <div id="myModall" className="modal fade">
                <div className="modal-dialog modal-login">
                    <div className="modal-content">
                        <div className="modal-header"> 
                            <div className="nikelogo col-md-12">
                                <div className="row justify-content-center">
                                    <img style={{height: "17px", width: "324"}} src="assets/img/nikelogo.png"/>
                                </div>
                                <div className="row justify-content-center">        
                                    <h5 className="modal-title">BECOME A NIKE MEMBER</h5>
                                </div>
                                <div className="row justify-content-center" style={{marginTop: "2px"}}>        
                                    <p className="text-center" style={{fontSize: "12px"}}>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                                </div>
                            </div>  
                            <button type="button" classNameName="close" data-dismiss="modal" aria-hidden="false">&times;</button>
                        </div>
                        <br/>
                        <div className="modal-body ">
                            <form action="#" method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email address" required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name" required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" required="required"/>         
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control" placeholder="Date of Birth" required="required"/> 
                                    <p className="text-center" style={{fontSize: "15px"}}>Get a Nike Member Reward every year on your Birthday.</p>       
                                </div>
                                <div className="form-group">
                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-md example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>      
                                </div>
                                <div className="row g-3">
                                    <div className="col text-align-center">
                                        <button type="button" className="btn btn-lg btn-outline-secondary">Male</button>
                                    </div>
                                    <div className="col text-align-center">
                                        <button type="button" className="btn btn-lg btn-outline-secondary">female</button>
                                    </div>
                                </div><br/>
                                <div className="col-md-12 text-center">
                                    <input type="checkbox"/>
                                    <label style={{paddingLeft: "5px", fontSize: "11px"}}>Sign up for emails to get updates from Nike on products</label>
                                </div>
                                <div className="col">
                                    <p className="text-center">By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
                                </div>
                                <div className="form-group mb-4">
                                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="JOIN US"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p>Alredy Member?</p><a href="#mymodal"> Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
                    </li>
                </ul>
                
            
            
             
            </div> 
        </div>
    )
}
export default Topnav