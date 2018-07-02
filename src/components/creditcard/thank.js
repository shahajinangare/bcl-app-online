import React, { Component } from 'react';
import ThnakyouContent from '../../view/creditcard/thank';

class Thank extends Component {

    constructor(props) {
      super(props);
        
        this.state = {
        ErrorMsg:''
        };
      
        
      }
      componentDidMount() {
        
      }
  
   
      render() {
        return (
            <ThnakyouContent objthanks={this}/>
        )
      }
    }
  
    export default Thank;