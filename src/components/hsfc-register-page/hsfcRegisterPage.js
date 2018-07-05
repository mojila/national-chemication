import React, {Component} from 'react';
import {
    Progress,
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';
import {
    Link,
    withRouter
} from 'react-router-dom';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/hsfc.jpeg';
import jersey from './../../statics/images/jersey.jpg';

import {Consumer} from '../../context/context';

class HsfcRegisterPage extends Component {
    componentDidMount() {
        document.title = "Pendaftaran Peserta HSFC";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }

    render() {
        let {match} = this.props;

        return <Container
            className="mt-md-4"
        >
            <Animated
                isVisible
                animationIn="fadeIn"
            >
                <Row>
                    <Col>
                        <div 
                            className="small text-capitalize text-center text-white"
                        >
                            Info dasar
                        </div>
                    </Col>
                    <Col>
                        <div 
                            className="small text-capitalize text-center text-white"
                        >
                            Official
                        </div>
                    </Col>
                    <Col>
                        <div className="small text-capitalize text-center text-white">
                            Pemain 1 s/d 5
                        </div>
                    </Col>
                    <Col>
                        <div className="small text-capitalize text-center text-white">
                            Pemain 6 s/d 10
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Progress 
                            value={Number(match.params.step) > 0  ? 5:0}
                            min="0" 
                            max="5"
                            className="shadow"
                            color="primary"
                        />
                    </Col>
                    <Col>
                        <Progress 
                            value={Number(match.params.step) > 1  ? 5:0}
                            min="0" 
                            max="5"
                            className="shadow"
                            color="primary"
                        />
                    </Col>
                    <Col>
                        <Progress 
                            value={Number(match.params.step) > 2  ? 5:0}                            
                            min="0" 
                            max="5"
                            className="shadow"
                            color="primary"
                        />
                    </Col>
                    <Col>
                        <Progress 
                            value={Number(match.params.step) > 3  ? 5:0}                            
                            min="0" 
                            max="5"
                            className="shadow"
                            color="primary"
                        />
                    </Col>
                </Row>
            </Animated>
            <Animated
                animationIn="flipInY"
                animationOut="flipOutY"
                isVisible
            >
                {Number(match.params.step) === 1
                    && <InfoDasarForm/>}
                {Number(match.params.step) === 2
                    && <OfficialForm/>}
                {Number(match.params.step) === 3
                    && <Pemain1sd5Form/>
                }
                {Number(match.params.step) === 4
                    && <Pemain6sd10Form/>
                }
            </Animated>
        </Container>;
    }
}

class InfoDasarForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null
        }
    }

    onSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        let {error} = this.state;

        return <Row className="mt-4">        
            <Col
                md={{
                    size:4,
                    offset:4
                }}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col>
                            <Button 
                                size="sm" 
                                color="light" 
                                className="shadow"
                                tag={Link}
                                to="/daftar"
                            >
                                Beranda
                            </Button>
                        </Col>
                        <Col>
                            <div 
                                className="small text-right text-capitalize"
                            >
                                Step 1: Info Dasar
                            </div>
                        </Col>
                    </Row>
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col md={{size:12,offset:0}}>
                            <FormGroup>
                                <Label className="small">Nama Sekolah</Label>
                                <Input size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col md={{size:12,offset:0}}>
                            <FormGroup>
                                <Label className="small">Kota / Kabupaten</Label>
                                <Input size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col md={{size:12,offset:0}}>
                            <FormGroup>
                                <Label className="small text-capitalize">No. HP yang bisa dihubungi</Label>
                                <Input size="sm"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row 
                        className="p-3 mb-4 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:6,
                                offset:6
                            }}
                        >
                            <Button
                                color="primary"
                                className="shadow float-right"
                                size="sm"
                                tag={Link}
                                to={`/daftar/hsfc/2`}
                                block
                            >
                                Selanjutnya
                            </Button>
                        </Col>
                    </Row>
                    {
                        error
                        && <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                isVisible
                            >
                                <Row
                                    className="p-3 bg-danger shadow rounded"
                                >
                                    <Col>
                                        <div className="text-white">Error</div>
                                    </Col>
                                </Row>
                            </Animated>
                    }
                </Form>
            </Col>
        </Row>;
    }
}

class OfficialForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {error} = this.state;

        return <Row
            className="mt-4"
        >
            <Col
                md={{size:12}}
            >
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{size:6,offset:6}}
                    >
                        <div 
                            className="small text-right text-capitalize"
                        >
                            Step 2: Official
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Official 1</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Official 2</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:12}}
            >
                <Row 
                    className="p-3 mb-4 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="light"
                            className="shadow"
                            size="sm"
                            tag={Link}
                            to={`/daftar/hsfc/1`}
                        >
                            Sebelumnya
                        </Button>
                    </Col>
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="primary"
                            className="shadow float-right"
                            size="sm"
                            tag={Link}
                            to={`/daftar/hsfc/3`}
                        >
                            Selanjutnya
                        </Button>
                    </Col>
                </Row>
                {
                    error
                    && <Animated
                            animationIn="fadeIn"
                            animationOut="fadeOut"
                            isVisible
                        >
                            <Row
                                className="p-3 bg-danger shadow rounded"
                            >
                                <Col>
                                    <div className="text-white">Error</div>
                                </Col>
                            </Row>
                        </Animated>
                }
            </Col>
        </Row>;
    }
}

class Pemain1sd5Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {error} = this.state;

        return <Row className="mt-4">
            <Col
                md={{size:12}}
            >
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{size:6,offset:6}}
                    >
                        <div 
                            className="small text-right text-capitalize"
                        >
                            Step 3: Pemain 1 s/d 5
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 1</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 2</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 3</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 4</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 5</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:12}}
            >
                <Row 
                    className="p-3 mb-4 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="light"
                            className="shadow"
                            size="sm"
                            tag={Link}
                            to={`/daftar/hsfc/2`}
                        >
                            Sebelumnya
                        </Button>
                    </Col>
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="primary"
                            className="shadow float-right"
                            size="sm"
                            tag={Link}
                            to={`/daftar/hsfc/4`}
                        >
                            Selanjutnya
                        </Button>
                    </Col>
                </Row>
                {
                    error
                    && <Animated
                            animationIn="fadeIn"
                            animationOut="fadeOut"
                            isVisible
                        >
                            <Row
                                className="p-3 bg-danger shadow rounded"
                            >
                                <Col>
                                    <div className="text-white">Error</div>
                                </Col>
                            </Row>
                        </Animated>
                }
            </Col>
        </Row>;
    }
}

class Pemain6sd10Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {error} = this.state;

        return <Row className="mt-4">
            <Col
                md={{size:12}}
            >
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{size:6,offset:6}}
                    >
                        <div 
                            className="small text-right text-capitalize"
                        >
                            Step 4: Pemain 6 s/d 10
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 6</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 7</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 8</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 9</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:6}}
            >
                <Form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                >
                    <Row
                        className="mb-1 p-3 bg-white shadow rounded"
                    >
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <Label className="small">Pemain 10</Label>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor HP</Label>
                                <Input size="sm" placeholder="Masukkan No. HP" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tempat Lahir</Label>
                                <Input size="sm" placeholder="Masukkan Tempat lahir" />
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Tanggal Lahir</Label>
                                <Input type="date" size="sm"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Foto 3x4</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:6
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Nomor Punggung</Label>
                                <div
                                    className="small p-3 rounded text-white text-center mb-1 pt-4"
                                    style={{
                                        background: "url('"+jersey+"')",
                                        backgroundSize: 'cover',
                                        fontSize: '2rem'
                                    }}
                                >
                                    0
                                </div>
                                <Input size="sm" type="number" min="1" placeholder="Masukkan no. punggung"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Kartu Pelajar</Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Kartu Pelajar
                                </div>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                        <Col
                            md={{
                                size:12
                            }}
                        >
                            <FormGroup>
                                <Label className="small">Scan Rapor (Berupa File PDF/DOCX)</Label>
                                <Input type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col
                md={{size:12}}
            >
                <Row 
                    className="p-3 mb-4 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="light"
                            className="shadow"
                            size="sm"
                            tag={Link}
                            to={`/daftar/hsfc/3`}
                        >
                            Sebelumnya
                        </Button>
                    </Col>
                    <Col
                        md={{
                            size:6
                        }}
                    >
                        <Button
                            color="primary"
                            className="shadow float-right"
                            size="sm"
                        >
                            Selesai
                        </Button>
                    </Col>
                </Row>
                {
                    error
                    && <Animated
                            animationIn="fadeIn"
                            animationOut="fadeOut"
                            isVisible
                        >
                            <Row
                                className="p-3 bg-danger shadow rounded"
                            >
                                <Col>
                                    <div className="text-white">Error</div>
                                </Col>
                            </Row>
                        </Animated>
                }
            </Col>
        </Row>;
    }
}

export default withRouter(HsfcRegisterPage);