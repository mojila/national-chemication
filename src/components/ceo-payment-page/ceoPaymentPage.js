import React, {Component} from 'react';
import {
    withRouter
} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';

import bg from './../../statics/images/ceo.jpg';
import {Navigator} from './../ceo-dashboard-page/ceoDashboardPage';
import {database} from './../../firebase/firebase';

class CeoPaymentPage extends Component {
    componentDidMount() {
        let uid = localStorage.getItem('uid') || null;

        document.title = "Bukti Pembayaran Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";

        if (!uid) {
            this.props.history.push('/daftar');
        }
    }

    render() {
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
                        <PaymentForm/>
                    </Animated>
                </Col>
            </Row>
        </Container>
        </div>;
    }
}

const INITIAL_STATE = {
    namaTim: '',
    buktiPembayaran: null,
    isLoading: false,
    isProcessing: false,
    error: null
};

class PaymentForm extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {
        let uid = localStorage.getItem('uid');

        this.setState({
            isLoading: true
        });

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            let {namaTim, buktiPembayaran} = snap.val();
            let isProcessing = buktiPembayaran ? true:false;

            if (snap) {
                this.setState({
                    namaTim,
                    buktiPembayaran,
                    isProcessing,
                    isLoading: false
                });
            }
        });
    }

    onFileChange(event) {
        let {buktiPembayaran} = this.state;

        this.setState({
            isLoading: true
        });

        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (e) => {
                buktiPembayaran = e.target.result;

                this.setState({
                    buktiPembayaran,
                    isLoading: false
                });
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    onSubmit(e) {
        let {buktiPembayaran} = this.state;
        let uid = localStorage.getItem('uid');
        let postData = {};
        let updates = {};

        this.setState({
            isLoading: true
        });

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            postData = snap.val();
            postData.buktiPembayaran = buktiPembayaran;

            updates['/pesertaCeo/' + uid] = postData;
            database.ref().update(updates);

            this.setState({
                isLoading: false,
                isProcessing: true
            });
        });

        e.preventDefault();
    }

    render() {
        let {namaTim, buktiPembayaran, isLoading, isProcessing} = this.state;

        return <Form className="mt-md-4" encType="multipart/form-data"
            onSubmit={this.onSubmit}
        >
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col>
                    <p className="mt-1 h6 text-uppercase text-center">
                        Konfirmasi Pembayaran
                    </p>
                </Col>
            </Row>
            {isProcessing
            && <Row
                className="mb-1 p-3 bg-success shadow rounded"
            >
                <Col>
                    <p className="m-0 p-0 h6 text-capitalize text-white text-center small">
                        Pembayaran anda sedang di proses
                    </p>
                </Col>
            </Row>}
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
                        {buktiPembayaran
                            ? <img src={buktiPembayaran} alt="Bukti Transfer" className="img-fluid" />
                            : 'Silahkan upload bukti'
                        }
                    </div>
                </Col>
                <Col>
                    <FormGroup className="mt-1">
                        <Input type="file" className="small" onChange={this.onFileChange}/>
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
                    <Button className="float-right shadow" color="primary" block disabled={isLoading}>
                        {isLoading
                        && <ReactLoading type="spin" color="white" height={24} width={24} className="ml-auto mr-auto" />
                        }
                        {!isLoading
                        && 'Konfirmasi'}
                    </Button>
                </Col>
            </Row>
        </Form>;
    }
}

export default withRouter(CeoPaymentPage);
