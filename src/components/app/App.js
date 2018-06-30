import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import LandingPage from './../landingpage/landingpage';
import RegisterPage from './../registerpage/registerpage';
import CeoLoginPage from './../ceologinpage/ceologinpage';
import CeoRegisterPage from '../ceoregisterpage/ceoregisterpage';
import CeoPaymentPage from '../ceopaymentpage/ceopaymentpage';
import ecregisterpage from '../ecregisterpage/ecregisterpage';

import * as routes from '../../constants/routes';
import {Provider} from '../../context/context';

let isLogin = false;

const App = () =>
  <Router>
    <Provider>
      {
        isLogin
        && <div>NavbarLogin</div>
      }
      <Switch>
        <Route
          exact
          path={routes.ROOT}
          component={LandingPage}
        />
        <Route
          exact
          path={routes.REGISTER.ROOT}
          component={RegisterPage}
        />
        <Route
          exact
          path={routes.LOGIN.CEO}
          component={CeoLoginPage}
        />
        <Route
          exact
          path={routes.REGISTER.CEO}
          component={CeoRegisterPage}
        />
        <Route
          exact
          path={routes.REGISTER.EC}
          component={ecregisterpage}
        />
        <Route
          exact
          path={routes.PAYMENT.CEO}
          component={CeoPaymentPage}
        />
      </Switch>
    </Provider>
  </Router>;

export default App;
