import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainComponent from '../../components/common/maincontent';

class commoncomponent extends Component {
    constructor(props) {
        super(props);
          
          this.state = {
       
          };
          this.checkvaliduser = this.checkvaliduser.bind(this);
        }
    checkvaliduser(){
        //check session
        if(sessionStorage.getItem('usersession') != null)
        {
          const userdet=JSON.parse(sessionStorage.getItem('userdet'));
          
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
}

export default commoncomponent;