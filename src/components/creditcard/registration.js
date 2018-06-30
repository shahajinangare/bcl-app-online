import React, { Component } from 'react';
import RegistrationContent from '../../view/creditcard/registration'
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';

class Registration extends Component {

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


   
      let IPaddress='';
      publicIP().then(ip => {
        console.log(ip);
        IPaddress =ip;
      });

      var randomnumber ='';
      const items ='1234567890'
      for (var i = 0; i < 5; i++)
      randomnumber += items[Math.floor(Math.random()*items.length)];


      const deviceinfo= deviceDetect();
      console.log(randomnumber);
      event.preventDefault();
      fetch('http://localhost:7000/creditcard/customerregistration', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          name: event.target.name.value,
          emailid:event.target.emailid.value,
          mobileno: event.target.mobileno.value,
          pincode: event.target.pincode.value,
          income:event.target.income.value,
          otp:randomnumber,
          latlong:'333',
          macaddress:'sdld',
          browser:deviceinfo.browserName,
          os:deviceinfo.osName,
          source: deviceinfo.engineName,
          createdby:'1',
          createdip:IPaddress
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
           // console.log(JSON.stringify(responseJson.result[0]));
              if(responseJson.code === 200)
              {
                sessionStorage.setItem('cccustdet', JSON.stringify(responseJson.result[0]));
                this.setState(
                  {
                    loggedIn: true,
                  },
                  () => {
                    this.props.history.push(prevLocation || "/verification");
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
          <RegistrationContent objregister={this}/>
      )
    }
  }

  export default Registration;