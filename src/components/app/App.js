import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import * as routes from './../../constants/routes';
import Provider from './../../context/context';
import LandingPage from './../landing-page/landingPage';
import RegisterPage from './../register-page/registerPage';
import CeoLoginPage from './../ceo-login-page/ceoLoginPage';
import CeoRegisterPage from './../ceo-register-page/ceoRegisterPage';
import CeoPaymentPage from './../ceo-payment-page/ceoPaymentPage';
import EcRegisterPage from './../ec-register-page';
import HsfcRegisterPage from './../hsfc-register-page';
import HsfcPaymentPage from './../hsfc-payment-page';
import AdminLoginPage from './../admin-login-page';
import CeoDashboardPage from './../ceo-dashboard-page/ceoDashboardPage';
import CeoEditMember from './../ceo-edit-member';
import AdminDashboardPage from './../admin-dashboard-page';
import PesertaCeoPage from './../peserta-ceo-page/pesertaCeoPage';
import CeoPrint from './../print/ceo.jsx';

const App = () =>
  <Router>
    <Provider>
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
          component={EcRegisterPage}
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
        <Route
          exact
          path={routes.DASHBOARD.ADMIN}
          component={AdminDashboardPage}
        />
        <Route
          exact
          path={routes.DASHBOARD.ADMIN_PESERTA_CEO}
          component={PesertaCeoPage}
        />
        <Route
          exact
          path={routes.DASHBOARD.CEO_EDIT_MEMBER}
          component={CeoEditMember}
        />
        <Route 
          exact
          path={routes.PRINT.CEO}
          component={CeoPrint}
        />
      </Switch>
    </Provider>
  </Router>;

export default App;
