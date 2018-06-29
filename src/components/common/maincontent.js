import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
 
import Profile from "../../profile";
import "../../app.css";


import Register from '../../components/users/register'
import Login from '../../components/users/login'
import Forgotpass from '../../components/users/forgotpass'
import Home from '../../components/common/home'
import UserList from '../../components/users/userlist';
import MenuComponent from '../../components/common/adminmenu'
const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return  <Comp {...props} /> 
      }}
    />
  );
};

class MaincontentComponent extends Component {
  handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true,
      },
      () => {
        this.props.history.push(prevLocation || "/register");
      },
    );
  };

  handlelogout = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: false,
      },
      () => {
        this.props.history.push(prevLocation || "/login");
      },
    );
  };

  render() {
    const { state = {} } = this.props.location;
    const { error } = state;

    return (
      <div>
        {/* <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handlelogout}>Log Out</button>
          <a href="/forgotpass" >forgotpass</a>
        </div> */}
        <div ><MenuComponent /></div>
        <div className="tabs">
          <Switch>
            <Route path="/" exact component={Login} />
            {/* <Route path="/register" exact component={Register} /> */}
            <ProtectedRoute path="/register" exact component={Register} />
            <ProtectedRoute path="/login" exact  component={Login} />
            <ProtectedRoute path="/forgotpass" exact component={Forgotpass} />
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute exact path='/users' component={UserList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MaincontentComponent;
