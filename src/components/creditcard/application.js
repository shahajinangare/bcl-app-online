import React, { Component } from 'react';
import ApplicationContent from '../../view/creditcard/application'

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
      
    alert(event.target.fname.value)
    alert(event.target.prefix.value)
    alert(event.target.qualificationid.value)
    alert(event.target.gender.value)
    };
    
    
    render() {
      return (
      
          <ApplicationContent objapplication={this}/>
      )
    }
  }

  export default Application;