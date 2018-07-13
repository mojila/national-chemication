import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {database} from './../../firebase/firebase.js';

class InfoDasarForm extends Component {
    state = {
        judulKarya: '',
        namaInstitusiPendidikan: '',
        telpOrFaxInstitusiPendidikan: '',
        emailInstitusiPendidikan: '',
        alamatInstitusiPendidikan: '',
        isLoading: false
    };
  
    componentDidMount() {
        window.scrollTo(0,0);

        let uid = localStorage.getItem('ec-register-uid');

        if (uid) {
        database.ref('pesertaEc/' + uid).once('value')
        .then((snap) => {
            let infoDasar = snap.val();

            if (infoDasar) {
                this.setState({
                    judulKarya: infoDasar.judulKarya || "",
                    namaInstitusiPendidikan: infoDasar.namaInstitusiPendidikan || "",
                    telpOrFaxInstitusiPendidikan: infoDasar.telpOrFaxInstitusiPendidikan || "",
                    emailInstitusiPendidikan: infoDasar.emailInstitusiPendidikan || "",
                    alamatInstitusiPendidikan: infoDasar.alamatInstitusiPendidikan || ""
                });
            }
        });
        }
    }
  
    onSubmit(e) {
      let {
        judulKarya,
        namaInstitusiPendidikan,
        telpOrFaxInstitusiPendidikan,
        emailInstitusiPendidikan,
        alamatInstitusiPendidikan
      } = this.state;
      let {
        history
      } = this.props;
      let uid = localStorage.getItem('ec-register-uid');

      this.setState({isLoading: true});

      if (uid) {
        database.ref('pesertaEc/' + uid).update({
            judulKarya,
            namaInstitusiPendidikan,
            telpOrFaxInstitusiPendidikan,
            emailInstitusiPendidikan,
            alamatInstitusiPendidikan
        })
        .then(() => {
            this.setState({isLoading: false});

            history.push('/daftar/ec/2');
        });
      } else {
        let key = database.ref('pesertaEc').push().key;

        localStorage.setItem('ec-register-uid', key);

        database.ref('pesertaEc/'+key).set({
            judulKarya,
            namaInstitusiPendidikan,
            telpOrFaxInstitusiPendidikan,
            emailInstitusiPendidikan,
            alamatInstitusiPendidikan
        })
        .then(() => {
            this.setState({isLoading: false});

            history.push('/daftar/ec/2');
        });
      }
  
      e.preventDefault();
    }
  
    render() {
      let {
        judulKarya,
        namaInstitusiPendidikan,
        telpOrFaxInstitusiPendidikan,
        emailInstitusiPendidikan,
        alamatInstitusiPendidikan,
        isLoading
      } = this.state;
  
      return (<Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="mb-1 p-3 bg-white shadow rounded">
        <Col>
            <Button size="sm" className="shadow" color="light"
            tag={Link} to="/">Beranda</Button>
        </Col>
        <Col>
            <p className="p-0 m-0 text-right text-uppercase">Info Dasar</p>
        </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
        <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Judul Karya
                </Label>
                <Input size="sm" placeholder="Masukkan judul karya"
                    value={judulKarya}
                    onChange={(e) => this.setState({judulKarya: e.target.value})}
                    required
                />
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Nama Institusi Pendidikan
                </Label>
                <Input size="sm" placeholder="Masukkan Nama Institusi"
                    value={namaInstitusiPendidikan}
                    onChange={(e) => this.setState({namaInstitusiPendidikan: e.target.value})}
                    required
                />
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Telp Institusi Pendidikan
                </Label>
                <Input
                    size="sm"
                    placeholder="Masukkan Telp/Fax Institusi Pendidikan"
                    value={telpOrFaxInstitusiPendidikan}
                    onChange={(e) => this.setState({telpOrFaxInstitusiPendidikan: e.target.value})}
                    required
                />
            </FormGroup>
        </Col>
        <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Email Institusi Pendidikan
                </Label>
                <Input
                    size="sm"
                    type="email"
                    placeholder="Masukkan Email Institusi Pendidikan"
                    value={emailInstitusiPendidikan}
                    onChange={(e) => this.setState({emailInstitusiPendidikan: e.target.value})}
                    required
                />
            </FormGroup>
        </Col>
        <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">
                    Alamat Institusi
                </Label>
                <textarea className="form-control"
                    onChange={(e) => this.setState({alamatInstitusiPendidikan: e.target.value})}
                    placeholder="Masukkan Alamat Institusi Pendidikan"
                    value={alamatInstitusiPendidikan}
                    required
                ></textarea>
            </FormGroup>
        </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
        <Col md={{size: 6, offset: 6}}>
            <Button color="primary" block>
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

export default withRouter(InfoDasarForm);