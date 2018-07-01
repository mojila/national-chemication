import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import * as routes from './../../constants/routes';
import {Provider} from './../../context/context';
import LandingPage from './../landing-page/landingPage';
import RegisterPage from './../register-page/registerPage';
import CeoLoginPage from './../ceo-login-page/ceoLoginPage';
import CeoRegisterPage from './../ceo-register-page/ceoRegisterPage';
import CeoPaymentPage from './../ceo-payment-page/ceoPaymentPage';
import ecregisterpage from './../ec-register-page/ecRegisterPage';
import HsfcRegisterPage from './../hsfc-register-page/hsfcRegisterPage';
import HsfcPaymentPage from './../hsfc-payment-page/hsfcPaymentPage';
import AdminLoginPage from './../admin-login-page/adminLoginPage';
import CeoDashboardPage from './../ceo-dashboard-page/ceoDashboardPage';

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
          path={routes.LOGIN.ADMIN}
          component={AdminLoginPage}
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
          path={routes.REGISTER.HSFC}
          component={HsfcRegisterPage}
        />
        <Route
          exact
          path={routes.PAYMENT.CEO}
          component={CeoPaymentPage}
        />
        <Route
          exact
          path={routes.PAYMENT.HSFC}
          component={HsfcPaymentPage}
        />
        <Route
          exact
          path={routes.DASHBOARD.CEO}
          component={CeoDashboardPage}
        />
      </Switch>
    </Provider>
  </Router>;

export default App;
