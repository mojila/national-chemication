import React, {Component} from 'react';
import {
    Form,
    Row,
    Col,
    Button,
} from 'reactstrap';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

import {sessionGet} from './';
import {database} from './../../firebase/firebase';

class Finish extends Component {
    state = {
        isLoading: false
    };

    onSubmit(e) {
        let {history} = this.props;

        this.setState({
        isLoading: true
        });

        let key = database.ref().child('pesertaEc').push().key;

        database.ref('pesertaEc/' + key).set({
        infoDasar: {
            judulKarya: sessionGet('ec-register-infoDasar-judulKarya') || "",
            namaInstitusiPendidikan: sessionGet('ec-register-infoDasar-namaInstitusiPendidikan') || "",
            telpOrFaxInstitusiPendidikan: sessionGet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan') || "",
            emailInstitusiPendidikan: sessionGet('ec-register-infoDasar-emailInstitusiPendidikan') || "",
            alamatInstitusiPendidikan: sessionGet('ec-register-infoDasar-alamatInstitusiPendidikan') || ""
        },
        dosenPembimbing: {
            nama: sessionGet('ec-register-dosenPembimbing-nama') || "",
            nip: sessionGet('ec-register-dosenPembimbing-nip') || "",
            email: sessionGet('ec-register-dosenPembimbing-email') || "",
            kontak: sessionGet('ec-register-dosenPembimbing-kontak') || "",
            foto: sessionGet('ec-register-dosenPembimbing-foto') || ""
        },
        ketua: {
            nama: sessionGet('ec-register-ketua-nama') || "",
            nim: sessionGet('ec-register-ketua-nama') || "",
            email: sessionGet('ec-register-ketua-email') || "",
            kontak: sessionGet('ec-register-ketua-kontak') || "",
            jurusan: sessionGet('ec-register-ketua-jurusan') || "",
            semester: sessionGet('ec-register-ketua-semester') || "",
            foto: sessionGet('ec-register-ketua-foto') || "",
            ktm: sessionGet('ec-register-ketua-ktm') || ""
        },
        anggota1: {
            nama: sessionGet('ec-register-anggota1-nama') || "",
            nim: sessionGet('ec-register-anggota1-nama') || "",
            email: sessionGet('ec-register-anggota1-email') || "",
            kontak: sessionGet('ec-register-anggota1-kontak') || "",
            jurusan: sessionGet('ec-register-anggota1-jurusan') || "",
            semester: sessionGet('ec-register-anggota1-semester') || "",
            foto: sessionGet('ec-register-anggota1-foto') || "",
            ktm: sessionGet('ec-register-anggota1-ktm') || ""
        },
        anggota2: {
            nama: sessionGet('ec-register-anggota2-nama') || "",
            nim: sessionGet('ec-register-anggota2-nama') || "",
            email: sessionGet('ec-register-anggota2-email') || "",
            kontak: sessionGet('ec-register-anggota2-kontak') || "",
            jurusan: sessionGet('ec-register-anggota2-jurusan') || "",
            semester: sessionGet('ec-register-anggota2-semester') || "",
            foto: sessionGet('ec-register-anggota2-foto') || "",
            ktm: sessionGet('ec-register-anggota2-ktm') || ""
        }
        })
        .then(() => {
        this.setState({
            isLoading: false
        });

        sessionStorage.clear();

        swal("Selamat, Pendaftaran Telah Berhasil!")
        .then(() => history.push('/'));
        });

        e.preventDefault();
    }

    render() {
        let {isLoading} = this.state;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col>
                <p className="p-0 m-0 text-center text-uppercase">Konfirmasi Pendaftaran</p>
            </Col>
            </Row>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col>
                <p className="p-0 m-0 small text-center">
                Klik Konfirmasi bila telah yakin semua data yang sudah
                dimasukkan telah benar.
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
                <Button block color="primary" className="shadow">
                {isLoading
                && <ReactLoading type="spin" color="white" height={24} width={24} className="mx-auto"/>}
                {!isLoading
                && 'Konfirmasi'}
                </Button>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default Finish;