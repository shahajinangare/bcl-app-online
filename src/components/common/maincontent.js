import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import Registration from '../../components/creditcard/registration';
import Verification from '../../components/creditcard/verification';
import Offers from '../../components/creditcard/offers';
import Home from '../../components/common/home';
import Appliaction from '../../components/creditcard/application';

import Loader from 'react-loader-spinner'
//import '../../assets/stylesheets/app.css';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";
import Thanks from '../../components/creditcard/thank';
import Modal from 'react-modal';

import SimpleUsage from '../common/model';
Modal.setAppElement('#modeluser');
const examples = [
  SimpleUsage
];
Modal.setAppElement('#modeluser');

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

  constructor(props) {
    super(props);
      
      this.state = {
        loggedIn: true,
        isLoaded: 'block',
        isOpen: true
      };
    
      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }


  handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true,
        isLoaded: false
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
   //const { isLoaded } = this.state;
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
            <ProtectedRoute path="/application" exact  component={Appliaction} />
            <ProtectedRoute path="/thankyou" exact  component={Thanks} />
           
            
            {/* <ProtectedRoute path="/forgotpass" exact component={Forgotpass} />
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute exact path='/users' component={UserList} /> */}
          </Switch>
        </div>
       
        <div>
            {examples.map((example, key) => {
            const ExampleApp = example.app;
            return (
            <div key={key + 1} className="example">
              <h3>{`#${key + 1}. ${example.label}`}</h3>               <ExampleApp />
            </div>
            );
            })}
          </div>
      </div>
    );
  }
}

export default MaincontentComponent;
