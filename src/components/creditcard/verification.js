import React, { Component } from 'react';
import '../../assets/stylesheets/login.css';
import VerificationContent from '../../view/creditcard/verification'
import { deviceDetect } from 'react-device-detect';
import publicIP from 'react-native-public-ip';

class Verification extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:'',
      showmobileno:'',
      isLoaded: 'none'
      };
    
      this.btnsubmit = this.btnsubmit.bind(this);
     

    }

    CheckMaxLength(val) {
      var aa=val;
      // if (val.value > val.maxLength)
      //   val.value = val.value.slice(0, val.maxLength);
    
      // if (val.value !== '')
      //   if (parseInt(val.value) === 0 || parseInt(val.value) < 0)
      //     val.value = '';
    }
    
    
    
    componentDidMount() {
      const custdet=JSON.parse(sessionStorage.getItem('cccustdet'));
      if(custdet != null)
      {

        this.setState({
          ErrorMsg: '',
          showmobileno:'XXXXXXX'+ custdet.mobileno.substr(7)
        });
      }
    }


    
    btnsubmit = (event) => {
      this.setState({
        isLoaded: 'block'
      });  
      const { state = {} } = this.props.location;
      const { prevLocation } = state;
   
      let IPaddress='';
      publicIP().then(ip => {
        console.log(ip);
        IPaddress =ip;
      });
      const custdet=JSON.parse(sessionStorage.getItem('cccustdet'));
      if(custdet != null)
      {

      }
       
      
      const deviceinfo= deviceDetect();
      //console.log(randomnumber);
      event.preventDefault();
      fetch('http://localhost:7000/creditcard/customerverification', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          customerid: custdet.customerid,
          name: custdet.name,
          emailid:custdet.emailid,
          mobileno: custdet.mobileno,
          pincode: custdet.pincode,
          income:custdet.income,
          otp:event.target.otp.value,
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
                    this.props.history.push(prevLocation || "/offers");
                  },
                );
              }
              else
              {
                this.setState({
                  ErrorMsg: responseJson.message,
                  isLoaded: 'none'
 
                });
              }
            return responseJson.result;
          })
          .catch((error) => {
            console.error(error);
          });
    };
   
    // btnsubmit = (event) => {
      
    //   const { state = {} } = this.props.location;
    //   const { prevLocation } = state;


    //   this.setState(
    //     {
    //       loggedIn: true,
    //     },
    //     () => {
    //       this.props.history.push(prevLocation || "/offers");
    //     },
    //   );
      
    
    // };
  
    
    render() {
      return (
          <VerificationContent Verify={this}/>
      )
    }
  }

  export default Verification;