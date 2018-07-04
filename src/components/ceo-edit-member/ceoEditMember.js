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
import ReactLoading from 'react-loading';

import {Navigator} from './../ceo-dashboard-page/ceoDashboardPage';
import {database} from './../../firebase/firebase';

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
        let {match, history} = this.props;

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
                        && <IdentitasKetuaForm history={history}/>
                    }
                    {
                        Number(match.params.step) === 2
                        && <IdentitasAnggota1Form history={history}/>
                    }
                    {
                        Number(match.params.step) === 3
                        && <IdentitasAnggota2Form history={history}/>
                    }
                </Animated>
            </Container>
        </div>;
    }
}

const byKeyProp = (propertyName, value) => () => ({
    [propertyName]: value
});

class IdentitasKetuaForm extends Component {
    constructor(props) {
        super(props);

        this.onFotoUpload = this.onFotoUpload.bind(this);
        this.onTandaPengenalSiswaUpload = this.onTandaPengenalSiswaUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null,
            nama: '',
            foto: null,
            tandaPengenalSiswa: null,
            isLoading: false
        }
    }
    
    componentDidMount() {
        window.scrollTo(0,0);
        let uid = localStorage.getItem('uid');

        this.setState(byKeyProp('isLoading', true));
        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            let {ketua} = snap.val();

            if (ketua) {
                this.setState({
                    nama: ketua.nama,
                    foto: ketua.foto,
                    tandaPengenalSiswa: ketua.tandaPengenalSiswa,
                    isLoading: false
                });
            }
        });
    }

    onFotoUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('foto', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    }

    onTandaPengenalSiswaUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('tandaPengenalSiswa', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    } 

    onSubmit(e) {
        let uid = localStorage.getItem('uid');
        let {nama, foto, tandaPengenalSiswa} = this.state;
        let {history} = this.props;
        let postData = {};
        let updates = {};

        this.setState(byKeyProp('isLoading', true));

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            postData = snap.val();
            postData.ketua = {
                nama,
                foto,
                tandaPengenalSiswa
            };

            updates['/pesertaCeo/' + uid] = postData;
            database.ref().update(updates);

            this.setState({
                isLoading: false
            });

            history.push('/dashboard/ceo/edit-member/2');
        })

        e.preventDefault();
    }

    render() {
        let {nama, foto, tandaPengenalSiswa, isLoading} = this.state;

        return <Row className="mt-4 mb-4">
            <Col
                md={{size:6,offset:3}}
            >
                <Form onSubmit={this.onSubmit}>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col>
                            <div className="text-center small">Identitas Ketua</div>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded mb-1">
                        <Col md="12">
                            <FormGroup>
                                <Label className="small">Nama</Label>
                                <Input size="sm" placeholder="Masukkan nama"
                                onChange={e => this.setState(byKeyProp('nama', e.target.value))}
                                value={nama}
                                />
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
                                    {foto
                                    ? <img className="img-fluid" src={foto}/>
                                    : 'Silahkan Unggah Foto'}
                                </div>
                                <Input className="small" onChange={this.onFotoUpload} type="file"/>
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
                                    {tandaPengenalSiswa
                                    ? <img className="img-fluid" src={tandaPengenalSiswa}/>
                                    : 'Silahkan Unggah Tanda Pengenal Siswa'}
                                </div>
                                <Input className="small" type="file"
                                onChange={this.onTandaPengenalSiswaUpload}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md={{size:6,offset:6}}>
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
                </Form>
            </Col>
        </Row>;
    }
}

class IdentitasAnggota1Form extends Component {
    constructor(props) {
        super(props);

        this.onFotoUpload = this.onFotoUpload.bind(this);
        this.onTandaPengenalSiswaUpload = this.onTandaPengenalSiswaUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null,
            nama: '',
            foto: null,
            tandaPengenalSiswa: null,
            isLoading: false
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        let uid = localStorage.getItem('uid');

        this.setState(byKeyProp('isLoading', true));
        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            let {anggota1} = snap.val();

            if (anggota1) {
                this.setState({
                    nama: anggota1.nama,
                    foto: anggota1.foto,
                    tandaPengenalSiswa: anggota1.tandaPengenalSiswa,
                    isLoading: false
                });
            } else {
                this.setState({
                    isLoading: false
                });
            }
        });
    }
    
    onFotoUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('foto', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    }

    onTandaPengenalSiswaUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('tandaPengenalSiswa', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    } 

    onSubmit(e) {
        let uid = localStorage.getItem('uid');
        let {nama, foto, tandaPengenalSiswa} = this.state;
        let {history} = this.props;
        let postData = {};
        let updates = {};

        this.setState(byKeyProp('isLoading', true));

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            postData = snap.val();
            postData.anggota1 = {
                nama,
                foto,
                tandaPengenalSiswa
            };

            updates['/pesertaCeo/' + uid] = postData;
            database.ref().update(updates);

            this.setState({
                isLoading: false
            });

            history.push('/dashboard/ceo/edit-member/3');
        })

        e.preventDefault();
    }

    render() {
        let {nama, foto, tandaPengenalSiswa, isLoading} = this.state;

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
                                <Input size="sm" placeholder="Masukkan nama"
                                onChange={e => this.setState(byKeyProp('nama', e.target.value))}
                                value={nama}
                                />
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
                                    {foto
                                    ? <img className="img-fluid" src={foto}/>
                                    : 'Silahkan Unggah Foto'}
                                </div>
                                <Input className="small" onChange={this.onFotoUpload} type="file"/>
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
                                    {tandaPengenalSiswa
                                    ? <img className="img-fluid" src={tandaPengenalSiswa}/>
                                    : 'Silahkan Unggah Tanda Pengenal Siswa'}
                                </div>
                                <Input className="small" type="file"
                                onChange={this.onTandaPengenalSiswaUpload}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md="6">
                            <Button color="light" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/1">Sebelumnya</Button>
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
                </Form>
            </Col>
        </Row>;
    }
}

class IdentitasAnggota2Form extends Component {
    constructor(props) {
        super(props);

        this.onFotoUpload = this.onFotoUpload.bind(this);
        this.onTandaPengenalSiswaUpload = this.onTandaPengenalSiswaUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            error: null,
            nama: '',
            foto: null,
            tandaPengenalSiswa: null,
            isLoading: false
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        let uid = localStorage.getItem('uid');

        this.setState(byKeyProp('isLoading', true));
        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            let {anggota2} = snap.val();

            if (anggota2) {
                this.setState({
                    nama: anggota2.nama,
                    foto: anggota2.foto,
                    tandaPengenalSiswa: anggota2.tandaPengenalSiswa,
                    isLoading: false
                });
            } else {
                this.setState({
                    isLoading: false
                });
            }
        });
    }
    
    onFotoUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('foto', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    }

    onTandaPengenalSiswaUpload(event) {
        this.setState(byKeyProp('isLoading', true));

        if (event.target.files && event.target.files[0]) {
            let read = new FileReader();

            read.onload = (e) => {
                this.setState(byKeyProp('tandaPengenalSiswa', e.target.result));
                this.setState(byKeyProp('isLoading', false));
            }

            read.readAsDataURL(event.target.files[0]);
        }
    } 

    onSubmit(e) {
        let uid = localStorage.getItem('uid');
        let {nama, foto, tandaPengenalSiswa} = this.state;
        let {history} = this.props;
        let postData = {};
        let updates = {};

        this.setState(byKeyProp('isLoading', true));

        database.ref('/pesertaCeo/' + uid).once('value')
        .then((snap) => {
            postData = snap.val();
            postData.anggota2 = {
                nama,
                foto,
                tandaPengenalSiswa
            };

            updates['/pesertaCeo/' + uid] = postData;
            database.ref().update(updates);

            this.setState({
                isLoading: false
            });

            history.push('/dashboard/ceo');
        })

        e.preventDefault();
    }

    render() {
        let {nama, foto, tandaPengenalSiswa, isLoading} = this.state;

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
                                <Input size="sm" placeholder="Masukkan nama"
                                onChange={e => this.setState(byKeyProp('nama', e.target.value))}
                                value={nama}
                                />
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
                                    {foto
                                    ? <img className="img-fluid" src={foto}/>
                                    : 'Silahkan Unggah Foto'}
                                </div>
                                <Input className="small" onChange={this.onFotoUpload} type="file"/>
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
                                    {tandaPengenalSiswa
                                    ? <img className="img-fluid" src={tandaPengenalSiswa}/>
                                    : 'Silahkan Unggah Tanda Pengenal Siswa'}
                                </div>
                                <Input className="small" type="file"
                                onChange={this.onTandaPengenalSiswaUpload}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-3 bg-white shadow rounded">
                        <Col md="6">
                            <Button color="light" className="shadow" size="sm" block tag={Link} to="/dashboard/ceo/edit-member/1">Sebelumnya</Button>
                        </Col>
                        <Col md="6">
                            <Button color="primary" className="shadow" size="sm" block
                            disabled={!nama || !foto || !tandaPengenalSiswa}
                            >
                            {isLoading
                            && <ReactLoading height={24} width={24} className="ml-auto mr-auto" type="spin" color="white"/>}
                            {!isLoading
                            && 'Selesai'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>;
    }
}

export default withRouter(CeoEditMember);