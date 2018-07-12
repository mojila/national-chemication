import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import ReactToPrint from 'react-to-print';

import logo from './../../statics/images/logo.png';

class Print extends Component {
    render() {
        return (
            <div>adaw</div>
        );
    }
}

class CeoPrint extends Component {
    render() {
        let date = new Date();
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let key = this.props.match.params.key;

        return (
            <Container className="p-3 border border-primary rounded mt-5">
                <Row>
                    <Col md="2">
                        <img src={logo} className="img-fluid" />
                    </Col>
                    <Col md="10">
                        <p className="h1 m-0 p-0 text-center text-uppercase">
                            bukti pendaftaran
                        </p>
                        <p className="p-0 m-0 text-capitalize text-center">Pendaftaran telah diterima pada: {date.toLocaleDateString('id-ID', options)}</p>
                    </Col>
                </Row>
                <Row className="border-top border-primary">
                    <Col md="2">
                        <div className="p-3 bg-primary mt-2">
                            <p className="h1 text-white text-center">CEO</p>
                        </div>
                    </Col>
                    <Col md="10">
                        <div className="p-3 bg-primary mt-2">
                            <p className="h1 text-white text-center">Kode: {key}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mt-3 border-top border-primary text-center">
                            www.nationalchemication.com
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center mt-4">
                            Mohon untuk segera di Print atau di simpan | <ReactToPrint 
                                trigger={() => <Button color="success">Klik Disini Untuk Print Bukti</Button>}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CeoPrint;