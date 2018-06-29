import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import Registration from '../../components/creditcard/registration'
import Verification from '../../components/creditcard/verification'

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
  //  const { state = {} } = this.props.location;
   // const { error } = state;

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
        <div style={{height:'300px',alignItems:'center',width:'100%',paddingLeft:'300px'  }} > <br/><br/><br/><br/><a href="/registration"  className="btn btn-success" >Credit Card</a><br/>
        <br/><br/><br/>
        <a href="/registration" className="btn btn-success" >Personal Loan</a></div>
        <div className="tabs">
          <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            {/* <Route path="/register" exact component={Register} /> */}
            <ProtectedRoute path="/registration" exact component={Registration} />
            <ProtectedRoute path="/verification" exact  component={Verification} />
            {/* <ProtectedRoute path="/forgotpass" exact component={Forgotpass} />
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute exact path='/users' component={UserList} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default MaincontentComponent;
