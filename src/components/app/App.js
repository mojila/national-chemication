import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LandingPage from './../landingpage/landingpage';
import RegisterPage from './../registerpage/registerpage';

import * as routes from '../../constants/routes';

let isLogin = false;

const App = () =>
  <Router>
    <div>
      {
        isLogin
        ? <div>NavbarLogin</div>
        : ''
      }

      <Route
        exact
        path={routes.ROOT}
        component={LandingPage}
      />
      <Route
        exact
        path={routes.REGISTER}
        component={RegisterPage}
      />
    </div>
  </Router>;

export default App;
