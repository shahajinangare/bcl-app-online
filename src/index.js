
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import MainContent from './components/common/maincontent';
import registerServiceWorker from './registerServiceWorker';
import MenuContent from './components/common/adminmenu';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MenuContent />, document.getElementById('menu-root'));
ReactDOM.render(<MainContent />, document.getElementById('main-content'));
ReactDOM.render(<Footer />, document.getElementById('footer'))

registerServiceWorker();

class index extends Component {
    constructor() {
        super();

    ;
    }
    // render() {
      
    //    alert(sessionStorage.getItem('userdet'));
    //    return(

    //     <div>
    //     </div>
    //    )
    // }
}

export default index;
