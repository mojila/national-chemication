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

import {sessionGet, sessionSet} from './';

class InfoDasarForm extends Component {
    state = {
        judulKarya: '',
        namaInstitusiPendidikan: '',
        telpOrFaxInstitusiPendidikan: '',
        emailInstitusiPendidikan: '',
        alamatInstitusiPendidikan: ''
    };
  
    componentDidMount() {
      this.setState({
        judulKarya: sessionGet('ec-register-infoDasar-judulKarya') || "",
        namaInstitusiPendidikan: sessionGet('ec-register-infoDasar-namaInstitusiPendidikan') || "",
        telpOrFaxInstitusiPendidikan: sessionGet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan') || "",
        emailInstitusiPendidikan: sessionGet('ec-register-infoDasar-emailInstitusiPendidikan') || "",
        alamatInstitusiPendidikan: sessionGet('ec-register-infoDasar-alamatInstitusiPendidikan') || ""
      });
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
  
      sessionSet('ec-register-infoDasar-judulKarya', judulKarya);
      sessionSet('ec-register-infoDasar-namaInstitusiPendidikan', namaInstitusiPendidikan);
      sessionSet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan', telpOrFaxInstitusiPendidikan);
      sessionSet('ec-register-infoDasar-emailInstitusiPendidikan', emailInstitusiPendidikan);
      sessionSet('ec-register-infoDasar-alamatInstitusiPendidikan', alamatInstitusiPendidikan);
  
      history.push('/daftar/ec/2');
  
      e.preventDefault();
    }
  
    render() {
      let {
        judulKarya,
        namaInstitusiPendidikan,
        telpOrFaxInstitusiPendidikan,
        emailInstitusiPendidikan,
        alamatInstitusiPendidikan
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
                <Label
                    className="small text-uppercase"
                >
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
                <Label
                    className="small text-uppercase"
                >
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
            <Button color="primary" block>Selanjutnya</Button>
        </Col>
        </Row>
    </Form>);
    }
}

export default InfoDasarForm;