
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './assets/stylesheets/index.css';
//  import Header from './components/common/header';
//  import Footer from './components/common/footer';
//  import MainContent from './maincontent'
// // import registerServiceWorker from './registerServiceWorker';
//  import MenuContent from './components/common/adminmenu';

// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<MenuContent />, document.getElementById('menu-root'));
// ReactDOM.render(<MainContent />, document.getElementById('main-content'));
// ReactDOM.render(<Footer />, document.getElementById('footer'))

// registerServiceWorker();

// class index extends Component {
//     constructor() {
//         super();

//     ;
//     }
//     // render() {
      
//     //    alert(sessionStorage.getItem('userdet'));
//     //    return(

//     //     <div>
//     //     </div>
//     //    )
//     // }
// }

// export default index;


import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/common/header';
import Footer from './components/common/footer';
//import MainContent from './maincontent'
import MenuContent from './components/common/adminmenu';
import MaincontentComponent from '../src/components/common/maincontent'

const routesMain = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MaincontentComponent} />
      </Switch>
    </BrowserRouter>
  );

  const routesHeader = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    </BrowserRouter>
  );
  const routesfooter = (
    <BrowserRouter>
      <Switch>
        <Route path="/"  component={Footer} />
      </Switch>
    </BrowserRouter>
  );
  const routesMenu = (
    <BrowserRouter>
      <Switch>
        <Route path="/"  component={MenuContent} />
      </Switch>
    </BrowserRouter>
  );

 ReactDOM.render(routesHeader, document.getElementById('header'));
// ReactDOM.render(routesMenu, document.getElementById('menu-root'));
 ReactDOM.render(routesMain, document.getElementById('main-content'));
 ReactDOM.render(routesfooter, document.getElementById('footer'));

