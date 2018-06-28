import React, { Component } from 'react';
import '../../assets/stylesheets/login.css';
import Home from '../../view/common/home';
import Commoncomponent from '../../components/common/common'
import ReactDOM from 'react-dom';
import MainComponent from '../../components/common/maincontent';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
          
          this.state = {
         // ErrorMsg:''
          };
        
          this.checkvaliduser();

        }
        componentDidMount() {
    
        }

        checkvaliduser(){
          //check session
            const userdet=JSON.parse(sessionStorage.getItem('userdet'));
            if(userdet != null)
            {
              if(userdet !='undefined'){
                if(userdet !=''){
                  if(userdet.name ==''){
                    ReactDOM.render((<MainComponent />), document.getElementById("main-content"));
                  }
                }
                else{
                  ReactDOM.render((<MainComponent />), document.getElementById("main-content"));
                }
            }
            else{
                ReactDOM.render((<MainComponent />), document.getElementById("main-content"));
            }
            
            }
            else{
                ReactDOM.render((<MainComponent />), document.getElementById("main-content"));
            }
      }

 render() {
      return (
          <Home home={this}/>
      )
    }
  }

  export default HomeComponent;