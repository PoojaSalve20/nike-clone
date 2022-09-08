import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";



class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",      
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); 
  };
render() {
  const { errors } = this.state;
        
      return (
          <div>
              <ul>
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
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email address" 
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                className={classnames("", {
                                    invalid: errors.email
                                  })}
                                />
                              <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="form-group">
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                className={classnames("", {
                                    invalid: errors.password
                                  })}
                                />
                                 <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="form-group">
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                required="required"
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                className={classnames("", {
                                    invalid: errors.password2
                                  })}
                                />
                                  <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="First Name" 
                                    required="required"
                                    onChange={this.onChange}
                                    value={this.state.fname}
                                    error={errors.fname}
                                    id="fname"
                                    className={classnames("", {
                                        invalid: errors.name
                                      })}
                                    />
                                   <span className="red-text">{errors.name}</span>
                            </div>
                            {/* <div className="form-group">
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Last Name" 
                                required="required"
                                onChange={this.onChange}
                                    value={this.state.lname}
                                    error={errors.lname}
                                    id="lname"
                                    className={classnames("", {
                                        invalid: errors.lname
                                      })}
                                /> 
                                   <span className="red-text">{errors.lname}</span> 
                            </div> */}
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
      )
  }}
  Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));