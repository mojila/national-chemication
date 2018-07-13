import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import logo from './../../statics/images/logo.png';

class EcPrint extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
        let uid = localStorage.getItem('ec-register-uid') || "";

        if (uid) {
            localStorage.clear();
        }
    }

    render() {
        let key = this.props.match.params.key;
        let date = new Date();
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return (
            <div>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center mt-4">
                            Mohon untuk segera di Print, Screenshot atau Simpan sebagai PDF | 
                            <Button color="success"
                                onClick={() => window.print()}
                            >Klik Disini Untuk Print Bukti</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="p-3 border border-primary rounded mt-5"
                ref={el => (this.componentRef = el)}
            >
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
                            <p className="h1 text-white text-center">EC</p>
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
            </Container>
            </div>
        );
    }
}

export default EcPrint;