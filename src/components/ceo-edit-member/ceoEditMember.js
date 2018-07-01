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

import {Navigator} from './../ceo-dashboard-page/ceoDashboardPage';

class CeoEditMember extends Component {
    componentDidMount() {
        let { step } = this.props.match.params;

        if (Number(step) === 1) {
            document.title = "Edit Biodata Anggota: Ketua";
        } else if (Number(step) === 2) {
            document.title = "Edit Biodata Anggota: Anggota 1";
        } else if (Number(step) === 3) {
            document.title = "Edit Biodata Anggota: Anggota 2";
        }
    }

    render() {
        let {match} = this.props;

        return <div>
            <Navigator/>
            <Container style={{marginTop: '5rem'}}>
                <Animated
                    isVisible
                    animationIn="fadeIn"
                >
                    <Row>
                        <Col>
                            <div className="small text-capitalize text-center">
                                Identitas diri ketua
                            </div>
                        </Col>
                        <Col>
                            <div className="small text-capitalize text-center">
                                Identitas Anggota 1
                            </div>
                        </Col>
                        <Col>
                            <div className="small text-capitalize text-center">
                                identitas anggota 2
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
                    </Row>
                </Animated>
                <Animated
                    isVisible
                    animationIn="fadeIn"
                >
                    {
                        Number(match.params.step) === 1
                        && <IdentitasKetuaForm/>
                    }
                    {
                        Number(match.params.step) === 2
                        && <IdentitasAnggota1Form/>
                    }
                    {
                        Number(match.params.step) === 3
                        && <IdentitasAnggota2Form/>
                    }
                </Animated>
            </Container>
        </div>;
    }
}

class IdentitasKetuaForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <Row className="mt-4 mb-4">
            <Col
                md={{size:6,offset:3}}
            >
                <Form onSubmit={this.onSubmit}>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col>
                            <div className="text-center small">Identitas Anggota 1</div>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col md="12">
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small"
                                >
                                    Foto 3x4
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small text-capitalize"
                                >
                                    Scan Kartu Pelajar/Rapor/Surat Keterangan Siswa Sekolah tsb.
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md={{size:6,offset:6}}>
                            <Button color="primary" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/2">Selanjutnya</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>;
    }
}

class IdentitasAnggota1Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <Row className="mt-4 mb-4">
            <Col
                md={{size:6,offset:3}}
            >
                <Form onSubmit={this.onSubmit}>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col>
                            <div className="text-center small">Identitas Anggota 1</div>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col md="12">
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small"
                                >
                                    Foto 3x4
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small text-capitalize"
                                >
                                    Scan Kartu Pelajar/Rapor/Surat Keterangan Siswa Sekolah tsb.
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md="6">
                            <Button color="light" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/1">Sebelumnya</Button>
                        </Col>
                        <Col md="6">
                            <Button color="primary" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/3">Selanjutnya</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>;
    }
}

class IdentitasAnggota2Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <Row className="mt-4 mb-4">
            <Col
                md={{size:6,offset:3}}
            >
                <Form onSubmit={this.onSubmit}>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col>
                            <div className="text-center small">Identitas Anggota 2</div>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col md="12">
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small"
                                >
                                    Foto 3x4
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label
                                    className="small text-capitalize"
                                >
                                    Scan Kartu Pelajar/Rapor/Surat Keterangan Siswa Sekolah tsb.
                                </Label>
                                <div
                                    className="small p-3 bg-secondary rounded text-white text-center mb-1"
                                >
                                    Silahkan Unggah Foto
                                </div>
                                <Input size="sm" type="file"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md="6">
                            <Button color="light" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/2">Sebelumnya</Button>
                        </Col>
                        <Col md="6">
                            <Button color="primary" className="shadow" size="sm" block>Simpan</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>;
    }
}

export default withRouter(CeoEditMember);