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
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

import {database} from './../../firebase/firebase';

class DosenPembimbingForm extends Component {
    state = {
        nama: '',
        nip: '',
        kontak: '',
        email: '',
        isLoading: false
    };

    componentDidMount() {
        let uid = localStorage.getItem('ec-register-uid');

        window.scrollTo(0,0);

        if (uid) {
            database.ref('pesertaEc/' + uid).once('value')
            .then((snap) => {
                let dosen = snap.val().dosen;

                if (dosen) {
                    this.setState({
                        nama: dosen.nama || '',
                        nip: dosen.nip || '',
                        kontak: dosen.kontak || '',
                        email: dosen.email || ''
                    });
                }
            });
        }
    }

    onSubmit(e) {
        let {
            nama,
            nip,
            kontak,
            email
        } = this.state;
        let {
            history
        } = this.props;
        let uid = localStorage.getItem('ec-register-uid');
        
        this.setState({isLoading: true});

        if (uid) {
            database.ref('pesertaEc/' + uid).update({
                dosen: {
                    nama,
                    nip,
                    kontak,
                    email
                }
            });

            this.setState({isLoading: false});

            history.push('/daftar/ec/3');            
        } else {
            this.setState({isLoading: false});

            swal("Pastikan telah mengisi Info Dasar.")
                .then(() => history.push('/daftar/ec/1'));
        }

        e.preventDefault();
    }

    render() {
        let {history} = this.props;
        let {
            nama,
            nip,
            kontak,
            email,
            isLoading
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
                <Button className="primary" color="primary" block>
                    {isLoading
                    && <ReactLoading height={24} width={24} className="ml-auto mr-auto" type="spin" color="white"/>}
                    {!isLoading
                    && 'Selanjutnya'}
                </Button>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default DosenPembimbingForm;