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

class OfficialForm extends Component {
    state = {
        official1: {
        nama: '',
        kontak: '',
        foto: ''
        },
        official2: {
        nama: '',
        kontak: '',
        foto: ''
        },
        isOfficial1: true,
        isOfficial2: false
    };

    componentDidMount() {
        this.setState({
        official1: {
            nama: sessionStorage.getItem('hsfc-register-official1-nama') || "",
            kontak: sessionStorage.getItem('hsfc-register-official1-kontak') || "",
            foto: sessionStorage.getItem('hsfc-register-official1-foto') || ""
        },
        official2: {
            nama: sessionStorage.getItem('hsfc-register-official2-nama') || "",
            kontak: sessionStorage.getItem('hsfc-register-official2-kontak') || "",
            foto: sessionStorage.getItem('hsfc-register-official2-foto') || ""
        }
        });
    }

    onSubmit(e) {
        let {history} = this.props;
        let {
        official1,
        official2,
        isOfficial1
        } = this.state;

        if (isOfficial1) {
        sessionStorage.setItem('hsfc-register-official1-nama', official1.nama);
        sessionStorage.setItem('hsfc-register-official1-kontak', official1.kontak);
        sessionStorage.setItem('hsfc-register-official1-foto', official1.foto);

        this.setState({
            isOfficial1: false,
            isOfficial2: true
        })
        } else {
        sessionStorage.setItem('hsfc-register-official2-nama', official2.nama);
        sessionStorage.setItem('hsfc-register-official2-kontak', official2.kontak);
        sessionStorage.setItem('hsfc-register-official2-foto', official2.foto);

        history.push('/daftar/hsfc/3');
        }

        e.preventDefault();
    }

    render() {
        let {history} = this.props;
        let {
        official1,
        official2,
        isOfficial1,
        isOfficial2
        } = this.state;

        return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Row className="p-3 bg-white shadow rounded mb-1">
            <Col md="12">
                <p className="text-center mb-1 p-0">Official</p>
            </Col>
            <Col md="6">
                <div className={"pointer p-1 shadow small text-center rounded " + (isOfficial1 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({isOfficial1: true, isOfficial2: false})}
                >Official 1</div>
            </Col>
            <Col md="6">
                <div className={"pointer p-1 shadow small text-center rounded " + (isOfficial2 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({isOfficial1: false, isOfficial2: true})}
                >Official 2</div>
            </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isOfficial1}>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={official1.nama}
                    onChange={(e) => {
                    official1.nama = e.target.value;

                    this.setState({...official1});
                    }}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">kontak (wa/line)</Label>
                <Input size="sm" value={official1.kontak}
                    onChange={(e) => {
                    official1.kontak = e.target.value;

                    this.setState({...official1});
                    }}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="12">
                <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                    {!official1.foto
                    && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                    </div>}
                    {official1.foto
                    && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={official1.foto} className="img-fluid"/>
                    </div>}
                    <Input type="file" className="small"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                            official1.foto = e.target.result;

                            this.setState({
                            official1
                            });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                        }
                    }}
                    required={!official1.foto}
                    />
                </FormGroup>
            </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isOfficial2}>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={official2.nama}
                    onChange={(e) => {
                    official2.nama = e.target.value;

                    this.setState({...official2});
                    }}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                <Label className="small text-uppercase">kontak (wa/line)</Label>
                <Input size="sm" value={official2.kontak}
                    onChange={(e) => {
                    official2.kontak = e.target.value;

                    this.setState({...official2});
                    }}
                    required
                />
                </FormGroup>
            </Col>
            <Col md="12">
                <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                    {!official2.foto
                    && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                    </div>}
                    {official2.foto
                    && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={official2.foto} className="img-fluid"/>
                    </div>}
                    <Input type="file" className="small"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                            official2.foto = e.target.result;

                            this.setState({
                            official2
                            });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                        }
                    }}
                    required={!official2.foto}
                    />
                </FormGroup>
            </Col>
            </Row>
            <Row className="p-3 bg-white shadow rounded">
            <Col md="6">
                <Button color="light" className="shadow" block
                onClick={() => {
                    if (isOfficial2) {
                    this.setState({
                        isOfficial1: true,
                        isOfficial2: false
                    });
                    } else {
                    history.push('/daftar/hsfc/1');
                    }
                }}
                >Sebelumnya</Button>
            </Col>
            <Col md="6">
                <Button color="primary" className="shadow" block>Selanjutnya</Button>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default OfficialForm;