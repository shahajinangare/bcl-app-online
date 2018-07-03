import React, { Component } from "react";
import Loader from 'react-loader-spinner'
import '../../assets/stylesheets/app.css';
 

class LoaderComponent extends Component {

  constructor(props) {
    super(props);
      
      this.state = {
        loggedIn: true,
        isLoaded: 'none'
      };
    
     
    }

  render() {
  //  const { state = {} } = this.props.location;
   // const { error } = state;
   const { isLoaded } = this.state.isLoaded;
    return (
      <div>
        
        <div className="overlay" style={{display:isLoaded}}  >
          <div className="spinner">
            <Loader  type="Grid" color="#F50006" height={100} width={100}    > </Loader>
          </div>
        </div>
    
      </div>
    );
  }
}

export default LoaderComponent;
