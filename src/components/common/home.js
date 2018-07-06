import React, { Component } from 'react';
import '../../assets/stylesheets/login.css';
import Home from '../../view/common/home';


class HomeComponent extends Component {
    constructor(props) {
        super(props);
          
          this.state = {
            isLoaded: 'none'
          };

        }
      
        componentDidMount() {
    
        }

 render() {
      return (
          <Home home={this}/>
      )
    }
  }

  export default HomeComponent;