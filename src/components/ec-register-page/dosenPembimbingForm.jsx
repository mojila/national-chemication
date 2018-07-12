import React, {Component} from 'react';
import {
    Form,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

import {sessionGet, sessionSet} from './';

class DosenPembimbingForm extends Component {
    state = {
        nama: '',
        nip: '',
        kontak: '',
        email: '',
    };

    componentDidMount() {
        this.setState({
            nama: sessionGet('ec-register-dosenPembimbing-nama') || "",
            nip: sessionGet('ec-register-dosenPembimbing-nip') || "",
            kontak: sessionGet('ec-register-dosenPembimbing-kontak') || "",
            email: sessionGet('ec-register-dosenPembimbing-email') || "",
        });
    }

    onSubmit(e) {
        let {
            nama,
            nip,
            kontak,
            email,
        } = this.state;
        let {
            history
        } = this.props;

        sessionSet('ec-register-dosenPembimbing-nama', nama);
        sessionSet('ec-register-dosenPembimbing-nip', nip);
        sessionSet('ec-register-dosenPembimbing-kontak', kontak);
        sessionSet('ec-register-dosenPembimbing-email', email);

        history.push('/daftar/ec/3');

        e.preventDefault();
    }

    render() {
        let {history} = this.props;
        let {
            nama,
            nip,
            kontak,
            email,
        } = this.state;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="mb-1 p-3 bg-white shadow rounded">
                <Col>
                    <p className="p-0 m-0 text-center text-uppercase">Dosen Pembimbing</p>
                </Col>
                </Row>
                <Row className="mb-1 p-3 bg-white shadow rounded">
                <Col md="6">
                    <FormGroup>
                    <Label className="small text-uppercase">Nama Dosen</Label>
                    <Input size="sm" placeholder="Masukkan Nama"
                        value={nama}
                        onChange={(e) => this.setState({nama: e.target.value})}
                        required
                    />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                    <Label className="small text-uppercase">nip</Label>
                    <Input size="sm" type="number" placeholder="Masukkan NIP"
                        value={nip}
                        onChange={(e) => this.setState({nip: e.target.value})}
                        required
                    />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                    <Label className="small text-uppercase">Kontak WA/Line</Label>
                    <Input size="sm" placeholder="Masukkan Kontak"
                        value={kontak}
                        onChange={(e) => this.setState({kontak: e.target.value})}
                        required
                    />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                    <Label className="small text-uppercase">Email</Label>
                    <Input size="sm" type="email" placeholder="Masukkan Kontak"
                        value={email}
                        onChange={(e) => this.setState({email: e.target.value})}
                        required
                    />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded">
            <Col md="6">
                <Button className="shadow" color="light" block
                onClick={(e) => history.push('/daftar/ec/1')}
                >Sebelumnya</Button>
            </Col>
            <Col md="6">
                <Button className="primary" color="primary" block>Selanjutnya</Button>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default DosenPembimbingForm;