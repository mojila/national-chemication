import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {Navigator} from './../admin-dashboard-page/adminDashboardPage';

class PesertaCeoPage extends Component {
    render() {
        return <div>
            <Navigator/>
        </div>;
    }
}

export default withRouter(PesertaCeoPage);