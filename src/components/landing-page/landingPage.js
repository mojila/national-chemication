import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LandingPage extends Component {
    componentDidMount() {
        this.props.history.push('/daftar');
    }
    
    render() {
        return <div>
            Landing
        </div>;
    }
}

export default withRouter(LandingPage);
