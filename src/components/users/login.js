import React, { Component } from 'react';
import LoginContent from '../../view/users/logincontent';
import '../../assets/stylesheets/login.css';
import HomeComponent from '../../view/common/home';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import RegisterContent from '../../view/users/register';
import ForgotpassContent from '../../components/users/forgotpass';
import { Route, Redirect } from 'react-router'
import PasswordHash from 'password-hash';

class Login extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
      ErrorMsg:''
      };
    
      this.loginsubmit = this.loginsubmit.bind(this);
      this.forgotpasssubmit = this.forgotpasssubmit.bind(this);
      this.registersubmit = this.registersubmit.bind(this);

    }
    componentDidMount() {
      sessionStorage.clear();
    }
    navigateToPage = () => {
      this.context.router.push('/home')
    };
  
    loginsubmit(event) {
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
               // return <Redirect push to='/home'/>;
              // this.navigateToPage;

                // ReactDOMServer.renderToString(
                //   <HomeComponent />
                // )
               // <Redirect push to="/Forgotpass" />
              //  return <Redirect to="/Forgotpass" />;

               // <Redirect push to="/Forgotpass"/>
                // console.log(JSON.parse(sessionStorage.getItem('userdet')).name);
                ReactDOM.render((<HomeComponent />), document.getElementById("main-content"));
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
    forgotpasssubmit(event) {
      ReactDOM.render((<ForgotpassContent />), document.getElementById("main-content"));  
    }
    registersubmit(event) {
      ReactDOM.render((<RegisterContent />), document.getElementById("main-content"));  
    }
    render() {
      return (
          <LoginContent login={this}/>
      )
    }
  }

  export default Login;