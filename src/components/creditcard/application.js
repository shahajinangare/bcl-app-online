import React, { Component } from 'react';
import ApplicationContent from '../../view/creditcard/application'

class Application extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      custData:[],
      ErrorMsg:''
      };
    
      this.applicationsubmit = this.applicationsubmit.bind(this);
    }
    componentDidMount() {
      this.getCustomerinfo();
     
     
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
            customerid:"",
	          mobileno:"9870117204"
          }),

        }).then((response)=>response.json())
        .then((responseJson) => {
        
          this.setState({
            //custData: responseJson.result
            
            custData : responseJson.result
        });

          console.log(this.state.custData);
         
      })
      .catch((error) => {
          console.error(error);
      });
    }

    applicationsubmit(event){
      
    alert(event.target.fname.value)
    alert(event.target.email.value)
    };
    
    
    render() {
      return (
      
          <ApplicationContent objapplication={this}/>
      )
    }
  }

  export default Application;