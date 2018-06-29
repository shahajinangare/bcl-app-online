import React, { Component } from 'react';
import LoginContent from '../../view/users/logincontent';
import '../../assets/stylesheets/login.css';

import PasswordHash from 'password-hash';

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
      var hashedPassword = PasswordHash.generate(event.target.password.value)

      console.log(hashedPassword);

      event.preventDefault();
      fetch('http://localhost:7000/admin/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          emailid: event.target.emailid.value,
          password:event.target.password.value
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
           // console.log(JSON.stringify(responseJson.result[0]));
              if(responseJson.code === 200)
              {
                sessionStorage.setItem('userdet', JSON.stringify(responseJson.result[0]));
                this.setState(
                  {
                    loggedIn: true,
                  },
                  () => {
                    this.props.history.push(prevLocation || "/register");
                  },
                );
              }
              else
              {
                this.setState({
                  ErrorMsg: responseJson.message
                });
              }
            return responseJson.result;
          })
          .catch((error) => {
            console.error(error);
          });




    
    };
  
    
    render() {
      return (
          <LoginContent Verify={this}/>
      )
    }
  }

  export default Verification;