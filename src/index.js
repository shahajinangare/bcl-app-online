import React from "react";
import ReactDOM from "react-dom";
 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/common/header';
import Footer from './components/common/footer';
//import MainContent from './maincontent'

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
  

 ReactDOM.render(routesHeader, document.getElementById('header'));
 ReactDOM.render(routesMain, document.getElementById('main-content'));
 ReactDOM.render(routesfooter, document.getElementById('footer'));

