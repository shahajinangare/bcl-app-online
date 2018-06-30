import React, { Component } from 'react';
 
import '../../assets/stylesheets/login.css';

import VerificationContent from '../../view/creditcard/verification'

class Verification extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:''
      };
    
      this.btnsubmit = this.btnsubmit.bind(this);
     

    }
    componentDidMount() {
      sessionStorage.clear();
    }

    btnsubmit = (event) => {
      
      const { state = {} } = this.props.location;
      const { prevLocation } = state;


      this.setState(
        {
          loggedIn: true,
        },
        () => {
          this.props.history.push(prevLocation || "/offers");
        },
      );
      
    
    };
  
    
    render() {
      return (
          <VerificationContent Verify={this}/>
      )
    }
  }

  export default Verification;