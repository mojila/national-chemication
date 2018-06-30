import React, {Component} from 'react';
import {
    withRouter
} from 'react-router-dom';
import {
    Container
} from 'reactstrap';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/ceo.jpg';

class CeoPaymentPage extends Component {
    componentDidMount() {
        document.title = "Bukti Pembayaran Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }

    render() {
        return <Container>
            Bukti Pembayaran
        </Container>;
    }
}

export default withRouter(CeoPaymentPage);