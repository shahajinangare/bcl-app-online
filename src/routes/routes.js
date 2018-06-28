/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

import Login from '../components/users/login';
import Register from '../components/users/register';
import Forgotpass from '../components/users/forgotpass';
import TestApp from '../components/test/testapp';

export default (
    <Route component={Login} path='/'>
        <IndexRoute component={Login} />
        <Route exact path='/login' component={Login}  />
        <Route exact path='/register' component={Register}  />
        <Route exact path='/forgotpass' component={Forgotpass} />
    </Route>
);