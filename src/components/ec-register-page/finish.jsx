import React, {Component} from 'react';
import {
    Form,
    Row,
    Col,
    Button,
} from 'reactstrap';

class Finish extends Component {
    render() {
        let {history} = this.props;
        let uid = localStorage.getItem('ec-register-uid');

        return (
            <div>
                <Row className="mb-1 p-3 bg-white shadow rounded">
                    <Col>
                        <p className="p-0 m-0 text-center text-uppercase">Konfirmasi Pendaftaran</p>
                    </Col>
                </Row>
                <Row className="mb-1 p-3 bg-white shadow rounded">
                    <Col>
                        <p className="p-0 text-center h5">
                        Selamat Tim Anda telah terdaftar.
                        </p>
                        <p className="p-0 m-0 small text-left">
                        Silahkan klik tombol "Lihat Bukti Pendaftaran" untuk melihat bukti pendaftaran dan mencetaknya.
                        </p>
                    </Col>
                </Row>
                <Row className="p-3 bg-white shadow rounded">
                    <Col>
                        <Button block color="light" className="shadow"
                            onClick={() => this.props.history.push('/daftar/ec/5')}
                        >Kembali</Button>
                    </Col>
                    <Col>
                        <Button block color="primary" className="shadow"
                            onClick={() => history.push('/print/ec/'+uid)}
                        >
                            Lihat Bukti Pendaftaran
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Finish;