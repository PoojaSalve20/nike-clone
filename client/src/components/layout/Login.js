import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard'); // push user to dashboard when they login
    }


if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }  

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
};
  
render() {
    const { errors } = this.state;

    
   
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
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email address" 
                                            required="required"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            className={classnames("", {
                                                invalid: errors.email || errors.emailnotfound
                                              })}
                                            />
                                                <span className="red-text">
                                                {errors.email}
                                                {errors.emailnotfound}
                                                </span>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            required="required"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            className={classnames("", {
                                                invalid: errors.password || errors.passwordincorrect
                                              })}
                                            />
                                            <span className="red-text">
                                                {errors.password}
                                                {errors.passwordincorrect}
                                            </span>         
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
                </ul>
                </div>
                </div>
    )
    }
    }
    
    Login.propTypes = {
        loginUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
      };
      const mapStateToProps = state => ({
        auth: state.auth,
        errors: state.errors
      });
      export default connect(
        mapStateToProps,
        { loginUser }
      )(Login);