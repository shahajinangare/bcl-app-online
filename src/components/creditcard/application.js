import React, { Component } from 'react';
import ApplicationContent from '../../view/creditcard/application'

class Application extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      custData: [],
      ErrorMsg:''
      };
    
      this.btnsubmit = this.btnsubmit.bind(this);
    }
    componentDidMount() {
      this.getCustomerinfo();
      sessionStorage.clear();
     
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
            custData: responseJson.result
          });

          console.log(this.state.custData[0].NAME);
         
      })
      .catch((error) => {
          console.error(error);
      });
    }

    btnsubmit = (event) => {
      
      
    };
    
    
    render() {
      return (
          <ApplicationContent objapplication={this}/>
      )
    }
  }

  export default Application;