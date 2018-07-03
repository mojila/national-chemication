import React, {Component} from 'react';
import {
    withRouter,
    Link
} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/ceo.jpg';
import {Consumer} from './../../context/context';
import {Navigator} from './../ceo-dashboard-page/ceoDashboardPage';
import {database} from './../../firebase/firebase';

const INITIAL_STATE = {
    namaTim: '',
    error: null
};

class CeoPaymentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {
        let uid = localStorage.getItem('uid') || null;

        document.title = "Bukti Pembayaran Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";

        if (uid) {
            database.ref('/pesertaCeo/' + uid).once('value')
            .then((snap) => {
                let {namaTim} = snap.val();

                if (snap) {
                    this.setState({
                        namaTim
                    });
                } else {

                }
            })
            .catch(error => {

            })
        } else {
            this.props.history.push('/daftar')
        }
    }

    render() {
        let {namaTim} = this.state;
        
        return <div>
        <Navigator/>
        <Container 
            className="mt-md-5 mb-5"
        >
            <Row>
                <Col
                    md={{
                        size:6,
                        offset:3
                    }}
                >
                    <Animated
                        animationIn="flipInY"
                        isVisible
                    >
                        <PaymentForm namaTim={namaTim}/>
                    </Animated>
                </Col>
            </Row>
        </Container>
        </div>;
    }
}

class PaymentForm extends Component {
    render() {
        let {namaTim} = this.props;

        return <Consumer>
        {({ceoPayment}) =>
        <Form className="mt-md-4" onSubmit={ceoPayment.onCeoPayment} encType="multipart/form-data">
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col>
                    <p className="mt-1 h6 text-uppercase text-center">
                        Konfirmasi Pembayaran
                    </p>
                </Col>
            </Row>
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col>
                    <p className="mt-1 h6 text-uppercase text-left">
                        Nama Tim: {namaTim}
                    </p>
                </Col>
            </Row>
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <div className="small">Upload Bukti Transfer</div>
                </Col>
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <div 
                        className="bg-secondary p-3 rounded text-center text-capitalize small text-white">
                        {ceoPayment.file
                            ? <img src={ceoPayment.file} alt="Bukti Transfer" className="img-fluid" />
                            : 'Silahkan upload bukti'
                        }
                    </div>
                </Col>
                <Col>
                    <FormGroup className="mt-1">
                        <Input type="file" className="small" onChange={ceoPayment.onFileChange}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row
                className="p-3 bg-white shadow rounded"
            >
                <Col
                    md={{
                        size:6,
                        offset:6
                    }}
                >
                    <Button className="float-right shadow" color="primary" block>Konfirmasi</Button>
                </Col>
            </Row>
        </Form>}
        </Consumer>;
    }
}

export default withRouter(CeoPaymentPage);