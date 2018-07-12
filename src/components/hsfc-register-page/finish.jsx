import React, {Component} from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'reactstrap';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

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
  
      let key = database.ref().child('pesertaHsfc').push().key;
  
      database.ref('pesertaHsfc/' + key).set({
        namaSekolah: sessionStorage.getItem('hsfc-register-infoDasar-namaSekolah') || "",
        kota: sessionStorage.getItem('hsfc-register-infoDasar-kota') || "",
        kontak: sessionStorage.getItem('hsfc-register-infoDasar-kontak') || "",
        suratPengantar: sessionStorage.getItem('hsfc-register-infoDasar-suratPengantar') || "",
        official1: {
          nama: sessionStorage.getItem('hsfc-register-official1-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-official1-kontak') || "",
          foto: sessionStorage.getItem('hsfc-register-official1-foto') || ""
        },
        official2: {
          nama: sessionStorage.getItem('hsfc-register-official2-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-official2-kontak') || "",
          foto: sessionStorage.getItem('hsfc-register-official2-foto') || ""
        },
        pemain1: {
          nama: sessionStorage.getItem('hsfc-register-pemain1-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain1-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain1-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain1-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain1-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain1-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain1-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain1-rapor') || ""
        },
        pemain2: {
          nama: sessionStorage.getItem('hsfc-register-pemain2-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain2-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain2-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain2-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain2-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain2-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain2-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain2-rapor') || ""
        },
        pemain3: {
          nama: sessionStorage.getItem('hsfc-register-pemain3-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain3-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain3-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain3-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain3-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain3-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain3-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain3-rapor') || ""
        },
        pemain4: {
          nama: sessionStorage.getItem('hsfc-register-pemain4-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain4-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain4-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain4-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain4-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain4-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain4-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain4-rapor') || ""
        },
        pemain5: {
          nama: sessionStorage.getItem('hsfc-register-pemain5-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain5-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain5-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain5-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain5-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain5-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain5-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain5-rapor') || ""
        },
        pemain6: {
          nama: sessionStorage.getItem('hsfc-register-pemain6-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain6-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain6-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain6-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain6-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain6-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain6-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain6-rapor') || ""
        },
        pemain7: {
          nama: sessionStorage.getItem('hsfc-register-pemain7-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain7-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain7-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain7-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain7-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain7-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain7-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain7-rapor') || ""
        },
        pemain8: {
          nama: sessionStorage.getItem('hsfc-register-pemain8-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain8-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain8-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain8-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain8-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain8-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain8-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain8-rapor') || ""
        },
        pemain9: {
          nama: sessionStorage.getItem('hsfc-register-pemain9-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain9-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain9-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain9-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain9-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain9-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain9-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain9-rapor') || ""
        },
        pemain10: {
          nama: sessionStorage.getItem('hsfc-register-pemain10-nama') || "",
          kontak: sessionStorage.getItem('hsfc-register-pemain10-kontak') || "",
          kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain10-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain10-tanggalLahir') || ""
          },
          foto: sessionStorage.getItem('hsfc-register-pemain10-foto') || "",
          nomorPunggung: sessionStorage.getItem('hsfc-register-pemain10-nomorPunggung') || "",
          kartuPelajar: sessionStorage.getItem('hsfc-register-pemain10-kartuPelajar') || "",
          rapor: localStorage.getItem('hsfc-register-pemain10-rapor') || ""
        }
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
  
        sessionStorage.clear();
        localStorage.clear();
  
        swal("Selamat anda telah terdaftar").then(() => history.push('/'));
      });
  
      e.preventDefault();
    }
  
    render() {
      let {history} = this.props;
      let {isLoading} = this.state;
  
      return (
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Row className="p-3 bg-white rounded shadow mb-1">
            <Col>
              <p className="m-0 p-0 text-uppercase text-center">Konfirmasi Pendaftaran</p>
            </Col>
          </Row>
  
          <Row className="p-3 bg-white rounded shadow mb-1">
            <Col>
              <p className="m-0 p-0 small text-center">
                Dengan klik tombol konfirmasi maka anda menyetujui
                segala ketentuan yang ada, dan pastikan semua data yang dimasukkan telah benar.</p>
            </Col>
          </Row>
  
          <Row className="p-3 bg-white rounded shadow">
            <Col>
              <Button className="shadow" color="light" block
                onClick={() => history.push('/daftar/hsfc/4')}
              >Kembali</Button>
            </Col>
            <Col>
              <Button className="shadow" color="primary" disabled={isLoading} block>
                {isLoading
                && <ReactLoading type="spin" height={24} width={24} color="white" className="mx-auto"/>}
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