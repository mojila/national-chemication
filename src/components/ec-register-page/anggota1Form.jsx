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

class Anggota1Form extends Component {
    state = {
        nama: '',
        nim: '',
        jurusan: '',
        semester: '',
        kontak: '',
        email: '',
        foto: '',
        ktm: '',
        isLoading: false
    };

    componentDidMount() {
        let uid = localStorage.getItem('ec-register-uid');

        window.scrollTo(0,0);

        if (uid) {
            database.ref('pesertaEc/' + uid).once('value')
            .then((snap) => {
                let anggota1 = snap.val().anggota1;

                if (anggota1) {
                    this.setState({
                        nama: anggota1.nama || '',
                        nim: anggota1.nim || '',
                        jurusan: anggota1.jurusan || '',
                        semester: anggota1.semester || '',
                        kontak: anggota1.kontak || '',
                        email: anggota1.email || '',
                        foto: anggota1.foto || '',
                        ktm: anggota1.ktm || ''
                    });
                }
            });
        }
    }

    onSubmit(e) {
        let {
            nama,
            nim,
            jurusan,
            semester,
            kontak,
            email,
            foto,
            ktm
        } = this.state;
        let { history } = this.props;
        let uid = localStorage.getItem('ec-register-uid');
        this.setState({isLoading: true});

        if (uid) {
            database.ref('pesertaEc/' + uid).update({
                anggota1: {
                    nama,
                    nim,
                    jurusan,
                    semester,
                    kontak,
                    email,
                    foto,
                    ktm
                }
            })
            .then(() => {
                this.setState({isLoading: false});
                history.push('/daftar/ec/5');
            });
        } else {
            this.setState({isLoading: false});

            swal('Pastikan telah mengisi Info Dasar.')
            .then(() => {
                history.push('/daftar/ec/1');
            });
        }

        e.preventDefault();
    }

    render() {
        let {history} = this.props;
        let {
            nama,
            nim,
            jurusan,
            semester,
            kontak,
            email,
            foto,
            ktm,
            isLoading
        } = this.state;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col>
                <p className="p-0 m-0 text-center text-uppercase">Anggota 1</p>
            </Col>
            </Row>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" placeholder="Masukkan Nama"
                    value={nama}
                    onChange={(e) => this.setState({nama: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">nim</Label>
                <Input size="sm" placeholder="Masukkan NIM" type="number"
                    value={nim}
                    onChange={(e) => this.setState({nim: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Jurusan</Label>
                <Input size="sm" placeholder="Masukkan Nama"
                    value={jurusan}
                    onChange={(e) => this.setState({jurusan: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Semester</Label>
                <Input size="sm" placeholder="Masukkan Semester" type="number"
                    value={semester}
                    onChange={(e) => this.setState({semester: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Kontak No. Line</Label>
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
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {foto
                && <div>
                    <img alt="Gambar Gagal Dimuat" src={foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => this.setState({
                        foto: e.target.result
                        });

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                    required={!foto}
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">KTM / Surat Keterangan</Label>
                {!ktm
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Upload KTM
                </div>}
                {ktm
                && <div>
                    <img alt="Gambar Gagal Dimuat" src={ktm} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => this.setState({
                        ktm: e.target.result
                        });

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                    required={!ktm}
                />
                </FormGroup>
            </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded">
            <Col md="6">
                <Button className="shadow" color="light" block
                onClick={(e) => history.push('/daftar/ec/3')}
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

export default Anggota1Form;