import React, { Component } from 'react';
import VWForgetpassord from '../../view/users/forgotpass';
import '../../assets/stylesheets/login.css';
import ReactDOM from 'react-dom';
import Login from '../../components/users/login';
import Register from '../../components/users/register';
class Forgetpassord extends Component {
    constructor(props) {
        super(props);
          
          this.state = {
          ErrorMsg:''
          };
        
          //this.loginsubmit = this.loginsubmit.bind(this);
          this.loginview = this.loginview.bind(this);
          this.registerview = this.registerview.bind(this);
    
           
        }
    
        loginview(event){
           ReactDOM.render((<Login/>),document.getElementById("main-content"));
        }
        registerview(event){
            ReactDOM.render((<Register/>),document.getElementById("main-content"));
        }
      
    render() {
      return (
          <VWForgetpassord vforgetpass={this} />
      )}
  }

  export default Forgetpassord;