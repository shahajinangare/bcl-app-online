import React, { Component } from 'react';
import ApplicationContent from '../../view/creditcard/application'
import { deviceDetect } from 'react-device-detect';

import ReactDOM from 'react-dom';

class Application extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      custData:[],
      qualificationall:[],
      prefixid:'',
      qualificationid:'',
      genderid:'',
      ErrorMsg:''
      };
    
      this.applicationsubmit = this.applicationsubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handlePrefixChange = this.handlePrefixChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
      
      
    }
    componentDidMount() {
      this.getAllrole();
      this.getCustomerinfo();
     
     
    }
    handleSelectChange(event) {
      this.setState({qualificationid: event.target.value});
     }
     handlePrefixChange(event) {
      this.setState({prefixid: event.target.value});
    }
    handleGenderChange(event) {
      this.setState({genderid: event.target.value});
    }
    getAllrole(){
      fetch('http://localhost:7000/creditcard/getqualification', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
     
      }).then((response) => response.json())
          .then((responseJson) => {
           
              if(responseJson.code == '200')
              {
                let QualificationFromApi = responseJson.result.map(iteam => { return {qualificationid: iteam.qualificationid, qualification: iteam.qualification} })
                this.setState({ qualificationall: [{qualificationid: '', qualification: 'Select qualification'}].concat(QualificationFromApi) });
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
     }
    
    getCustomerinfo()
    { 
        fetch('http://localhost:7000/creditcard/getcustomerinfo',{
          method:'POST',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            customerid:"1",
	          mobileno:""
          }),

        }).then((response)=>response.json())
        .then((responseJson) => {
        
          this.setState({
            custData : responseJson.result,
            prefixid:responseJson.result[0].prefix,
            qualificationid:responseJson.result[0].qualificationid,
            genderid:responseJson.result[0].gender

        });

          console.log(this.state.qualificationid);
         
      })
      .catch((error) => {
          console.error(error);
      });
    }

    applicationsubmit(event){
      
   const deviceinfo= deviceDetect();

  
   event.preventDefault();
   fetch('http://localhost:7000/creditcard/createcustomerprofile', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify({
          name:event.target.fname.value,
          emailid:event.target.email.value,
          mobileno:event.target.mobile.value,
          pancard:event.target.pan.value,
          DOB:event.target.dob.value,
          prefix:event.target.prefix.value,
          gender:event.target.gender.value,
          customerid:event.target.hdncustid.value,
          companyname:event.target.companyname.value,
          compnayid:event.target.hdncompnayid.value,
          qualificationid :event.target.qualificationid.value,
          residenceaddress1:event.target.resadd1.value,
          residenceaddress2:event.target.resadd2.value,
          residenceaddress3:event.target.resadd3.value,
          resicity:event.target.rescity.value,
          resipin :event.target.respin.value,
          resiphone  :event.target.resphone.value,
          resistate:event.target.resstate.value,
          resistdcode:event.target.resstdcode.value,
          occupationtype:event.target.occupationtype.value,
          designation:event.target.designation.value,
          natureofbusiness:event.target.natureofbusiness.value,
          officeaddress1:event.target.offadd1.value,
          officeaddress2:event.target.offadd2.value,
          officeaddress3:event.target.offadd3.value,
          officephone  :event.target.officephone.value,
          officestdcode  :event.target.officestdcode.value,
          officepin  :event.target.officepin.value,
          officestate:event.target.officestate.value,
          officecity:event.target.officecity.value,
          yearsofcurrentemployment:event.target.currempyear.value,
          fathersname:event.target.fathername.value,
          mothersmaidenname:event.target.mothermaidenname.value,
          resilandmark:event.target.resilandmark.value,
          officelandmark:event.target.officelandmark.value,
          createdby:event.target.hdncustid.value,
          createdip:'123.22.2.2',
          latlong:'s',
          macaddress:'s',
          browser:deviceinfo.browserName,
          os:deviceinfo.osName,
          source:deviceinfo.engineName
     }),
   }).then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson);
        
           if(responseJson.code === 200)
           {

        const { state = {} } = this.props.location;
      const { prevLocation } = state;

            this.setState(
                      {
                        loggedIn: true,
                      },
                      () => {
                        this.props.history.push(prevLocation || "/thankyou");
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
      
          <ApplicationContent objapplication={this}/>
      )
    }
  }

  export default Application;