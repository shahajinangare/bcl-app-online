import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import Registration from '../../components/creditcard/registration';
import Verification from '../../components/creditcard/verification';
import Offers from '../../components/creditcard/offers';
import Home from '../../components/common/home';
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
        { }
       
        <div className="tabs">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute path="/registration" exact component={Registration} />
            <ProtectedRoute path="/verification" exact  component={Verification} />
            <ProtectedRoute path="/offers" exact  component={Offers} />
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
