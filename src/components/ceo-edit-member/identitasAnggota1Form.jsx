import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';
import ReactLoading from 'react-loading';

import {database} from './../../firebase/firebase';

class IdentitasAnggota1Form extends Component {
    state = {
        error: "",
        nama: "",
        jenisKelamin: "",
        nisn: "",
        kelahiran: {
            tempat: "",
            tanggal: ""
        },
        kelas: "",
        alamat: "",
        foto: "",
        kontak: "",
        tandaPengenalSiswa: null,
        isLoading: false
    };

    componentDidMount() {
        window.scrollTo(0,0);
        let uid = localStorage.getItem('uid');

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            let {anggota1} = snap.val();

            if (anggota1) {
                this.setState({
                    nama: anggota1.nama,
                    jenisKelamin: anggota1.jenisKelamin,
                    nisn: anggota1.nisn,
                    kelahiran: {
                        tempat: anggota1.kelahiran.tempat,
                        tanggal: anggota1.kelahiran.tanggal
                    },
                    kelas: anggota1.kelas,
                    alamat: anggota1.alamat,
                    foto: anggota1.foto,
                    kontak: anggota1.kontak,
                    tandaPengenalSiswa: anggota1.tandaPengenalSiswa
                });
            }
        });
    }

    onSubmit(e) {
        let uid = localStorage.getItem('uid');
        let {
            nama,
            jenisKelamin,
            nisn,
            kelahiran,
            kelas,
            alamat,
            foto,
            kontak,
            tandaPengenalSiswa
        } = this.state;
        let {history} = this.props;
        let postData = {};
        let updates = {};

        this.setState({isLoading: true});

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            postData = snap.val();
            postData.anggota1 = {
                nama,
                jenisKelamin,
                nisn,
                kelahiran,
                kelas,
                alamat,
                foto,
                kontak,
                tandaPengenalSiswa
            };

            updates['/pesertaCeo/' + uid] = postData;
            database.ref().update(updates)
            .then(() => {
                this.setState({
                    isLoading: false
                });

                history.push('/dashboard/ceo/edit-member/3');
            });
        })

        e.preventDefault();
    }

    render() {
        let {
            nama,
            jenisKelamin,
            nisn,
            kelahiran,
            kelas,
            alamat,
            foto,
            kontak,
            tandaPengenalSiswa,
            isLoading
        } = this.state;
        let {history} = this.props;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="p-3 bg-white shadow rounded mb-1">
                <Col>
                    <div className="text-center small">Identitas Anggota 1</div>
                </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded mb-1">
                <Col md="6">
                    <FormGroup>
                        <Label className="small">Nama</Label>
                        <Input size="sm" placeholder="Masukkan nama"
                            value={nama}                                
                            onChange={e => this.setState({nama: e.target.value})}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small">Jenis Kelamin</Label>
                        <select className="form-control" style={{height: '32px', fontSize: '14px'}}
                        value={jenisKelamin}
                        onChange={(e) => this.setState({jenisKelamin: e.target.value})}
                        required
                        >
                        <option>Pilih Jenis Kelamin</option>
                        <option value="laki-laki">Laki - laki</option>
                        <option value="perempuan">Perempuan</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small">NISN</Label>
                        <Input size="sm" placeholder="Masukkan NISN"
                        value={nisn}
                        onChange={(e) => this.setState({nisn: e.target.value})}
                        required
                        />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small">Kelas</Label>
                        <Input size="sm" placeholder="Masukkan Kelas"
                        value={kelas}
                        onChange={(e) => this.setState({kelas: e.target.value})}
                        required
                        />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small">Kontak Line</Label>
                        <Input size="sm" placeholder="Masukkan Kontak"
                        value={kontak}
                        onChange={(e) => this.setState({kontak: e.target.value})}
                        required
                        />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small">Tempat, Tanggal Lahir</Label>
                        <div className="d-flex">
                        <Input size="sm" placeholder="Masukkan Tempat Lahir"
                            value={kelahiran.tempat}
                            onChange={(e) => {
                                kelahiran.tempat = e.target.value;

                                this.setState({kelahiran});
                            }}
                            required
                        />
                        <Input type="date" size="sm"
                            value={kelahiran.tanggal}
                            onChange={(e) => {
                                kelahiran.tanggal = e.target.value;

                                this.setState({kelahiran});
                            }}
                            required
                        />
                        </div>
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                    <Label className="small">Alamat</Label>
                    <textarea className="form-control" placeholder="Masukkan Alamat"
                        value={alamat}
                        onChange={(e) => this.setState({alamat: e.target.value})}
                        required
                    ></textarea>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label className="small mb-4">
                            Foto 3x4 (Foto Formal)
                        </Label>
                        <div
                            className="small p-3 bg-secondary rounded text-white text-center mb-1"
                        >
                            {foto
                            ? <img className="img-fluid" src={foto} alt="Foto"/>
                            : 'Silahkan Unggah Foto'}
                        </div>
                        <Input className="small" type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let reader = new FileReader();

                                    reader.onload = (e) => this.setState({foto: e.target.result});

                                    reader.readAsDataURL(e.target.files[0]);
                                }
                            }}
                        />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label
                            className="small text-capitalize"
                        >
                            Scan Kartu Pelajar/Rapor/Surat Keterangan Siswa Sekolah tsb.
                        </Label>
                        <div
                            className="small p-3 bg-secondary rounded text-white text-center mb-1"
                        >
                            {tandaPengenalSiswa
                            ? <img className="img-fluid" src={tandaPengenalSiswa} alt="Tanda Pengenal Siswa"/>
                            : 'Silahkan Unggah Tanda Pengenal Siswa'}
                        </div>
                        <Input className="small" type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let reader = new FileReader();

                                    reader.onload = (e) => this.setState({tandaPengenalSiswa: e.target.result});

                                    reader.readAsDataURL(e.target.files[0]);
                                }
                            }}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded">
                <Col md="6">
                    <Button size="sm" color="light" className="shadow" block
                        onClick={() => history.push('/dashboard/ceo/edit-member/1')}
                    >Sebelumnya</Button>
                </Col>
                <Col md="6">
                    <Button color="primary" className="shadow" size="sm" block
                    disabled={!nama || !foto || !tandaPengenalSiswa}
                    >
                    {isLoading
                    && <ReactLoading height={24} width={24} className="ml-auto mr-auto" type="spin" color="white"/>}
                    {!isLoading
                    && 'Selanjutnya'}
                    </Button>
                </Col>
            </Row>
        </Form>);
    }
}

export default IdentitasAnggota1Form;