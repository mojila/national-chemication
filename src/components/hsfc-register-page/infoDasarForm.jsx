import React, {Component} from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

class InfoDasarForm extends Component {
    state = {
        namaSekolah: '',
        kota: '',
        kontak: '',
        suratPengantar: '',
        isLoading: false
    }

    componentDidMount() {
        window.scrollTo(0,0);

        this.setState({
        namaSekolah: sessionStorage.getItem('hsfc-register-infoDasar-namaSekolah') || "",
        kota: sessionStorage.getItem('hsfc-register-infoDasar-kota') || "",
        kontak: sessionStorage.getItem('hsfc-register-infoDasar-kontak') || "",
        suratPengantar: sessionStorage.getItem('hsfc-register-infoDasar-suratPengantar') || ""
        });
    }

    onSubmit(e) {
        let {
        namaSekolah,
        kota,
        kontak,
        suratPengantar
        } = this.state;
        let {history} = this.props;

        sessionStorage.setItem('hsfc-register-infoDasar-namaSekolah', namaSekolah);
        sessionStorage.setItem('hsfc-register-infoDasar-kota', kota);
        sessionStorage.setItem('hsfc-register-infoDasar-kontak', kontak);
        sessionStorage.setItem('hsfc-register-infoDasar-suratPengantar', suratPengantar);

        history.push('/daftar/hsfc/2');

        e.preventDefault();
    }

    render() {
        let {
        namaSekolah,
        kota,
        kontak,
        suratPengantar
        } = this.state;
        let {history} = this.props;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col>
                <Button className="shadow" color="light" size="sm"
                onClick={() => history.push('/daftar')}
                >Beranda</Button>
            </Col>
            <Col>
                <p className="p-0 m-0 text-right">Info Dasar</p>
            </Col>
            </Row>
            <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col md="12">
                <FormGroup>
                <Label className="small text-uppercase">Nama Sekolah</Label>
                <Input size="sm"
                    value={namaSekolah}
                    onChange={(e) => this.setState({namaSekolah: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Kota</Label>
                <Input size="sm"
                    value={kota}
                    onChange={(e) => this.setState({kota: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">No. Telp Sekolah</Label>
                <Input size="sm"
                    value={kontak}
                    onChange={(e) => this.setState({kontak: e.target.value})}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="12">
                <FormGroup>
                    <Label className="small text-uppercase">Surat Pengantar dari Sekolah</Label>
                    {!suratPengantar
                    && <div className="p-3 bg-warning rounded text-center small mb-1">
                        Upload Surat Pengantar
                    </div>}
                    {suratPengantar
                    && <div className="p-3 rounded text-center small mb-1">
                        <img src={suratPengantar} className="img-fluid" />
                    </div>}
                    <Input className="small" type="file"
                        required={!suratPengantar}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                let reader = new FileReader();

                                reader.onload = (e) => this.setState({suratPengantar: e.target.result});

                                reader.readAsDataURL(e.target.files[0]);
                            }
                        }}
                    />
                </FormGroup>
            </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded">
            <Col md={{size:6, offset:6}}>
                <Button color="primary" className="shadow" block>Selanjutnya</Button>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default InfoDasarForm;