import React , {Component} from 'react';
import { Provider } from "react-redux";
import store from "./store"
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Home from '../src/components/Page/Home'
import Men from './components/Page/Men';
import Women from './components/Page/Women';
import Kids from './components/Page/Kids';
import MainNav from './components/layout/MainNav';
import Footer from './components/layout/Footer'
import Textslider from './components/layout/Textslider';
import LoginRegister from './components/layout/LoginRegister';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"; 
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./LoginRegister";
  }
}

class App extends Component{
render () {
  return (
   
    <Provider store={store}>
   <Router>
   <div className="App">
    <LoginRegister />
    <MainNav/>
    <Textslider/>
   <Route exact path="/LoginRegister" component={LoginRegister} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route path="/men" component={Men}/>
    <Route path="/women" component={Women}/>
    <Route path="/kids" component={Kids}/>
    <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
    <div>
      npm 
    </div>
    </div>
  </Router>
  </Provider>

  );
}}

export default App;
