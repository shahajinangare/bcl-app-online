import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./home";
 
import "./app.css";
import Register from '../src/components/users/register'
import Login from '../src/components/users/login'
import forgotpass from '../src/components/users/forgotpass'
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

class App extends Component {
   

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
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handlelogout}>Log Out</button>
          <a href="/forgotpass" >forgotpass</a>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <ProtectedRoute path="/register" component={Register} />
            <ProtectedRoute path="/login"   component={Login} />
            <ProtectedRoute path="/forgotpass"   component={forgotpass} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
