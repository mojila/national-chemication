import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {
    withRouter,
    Link
} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';

import bg from './../../statics/images/ceo.jpg';
import {Consumer} from './../../context/context';

class CeoRegisterPage extends Component {
    componentDidMount() {
        document.title = "Pendaftaran Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }
    
    render() {
        return <Container
            className="mt-md-4 mb-4"
        >
            <Row>
                <Col 
                    md={{size: 6, offset: 3}}
                >
                    <Animated
                        animationIn="flipInY"
                        animationOut="flipOutY"
                        isVisible
                    >
                        <RegisterForm/>
                    </Animated>
                </Col>
            </Row>
        </Container>;
    }
}

class RegisterForm extends Component {
    render() {
        return <Consumer>
        {({ceoRegister}) =>
            <Form onSubmit={ceoRegister.onRegister}>
            <Row 
                className="bg-white p-3 shadow rounded mb-1"
            >
                <Col>
                    <Button size="sm" tag={Link} to="/daftar" color="light" className="shadow">Beranda</Button>
                </Col>
                <Col>
                    <p className="h6 text-uppercase mt-1 text-right">Pendaftaran Akun</p>
                </Col>
            </Row>
            {ceoRegister.isSuccess
            && <Row
                className="bg-success p-3 shadow rounded mb-1"
            >
                <Col>
                    <p className="text-white m-0 p-0 small">Pendaftaran Berhasil Silahkan Login.</p>
                </Col>
                <Col>
                    <Button size="sm" color="light" className="shadow float-right"
                        tag={Link}
                        to="/login/ceo"
                    >
                        Login
                    </Button>
                </Col>
            </Row>}
            <Row
                className="bg-white p-3 shadow rounded mb-1"
            >
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Nama Tim</Label>
                        <Input 
                            size="sm" 
                            placeholder="Masukkan nama team" 
                            value={ceoRegister.namaTim}
                            onChange={ceoRegister.onNamaTimChange}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Email</Label>
                        <Input 
                            type="email" 
                            size="sm"
                            placeholder="Masukkan email"
                            value={ceoRegister.email}
                            onChange={ceoRegister.onEmailChange}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Password</Label>
                        <Input 
                            size="sm" 
                            type="password" 
                            placeholder="Masukkan Password"
                            value={ceoRegister.passwordOne}
                            onChange={ceoRegister.onPasswordOneChange}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Ulangi Password</Label>
                        <Input 
                            size="sm" 
                            type="password"
                            placeholder="Masukkan Password Lagi"
                            value={ceoRegister.passwordTwo}
                            onChange={ceoRegister.onPasswordTwoChange}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Nama Sekolah</Label>
                        <Input 
                            size="sm" 
                            placeholder="Masukkan nama sekolah"
                            value={ceoRegister.sekolah}
                            onChange={ceoRegister.onSekolahChange}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <FormGroup>
                        <Label className="small">Nomor HP/WA/ID Line Ketua</Label>
                        <Input 
                            size="sm"
                            placeholder="Masukkan nomor hp/WA/ID Line ketua"
                            value={ceoRegister.contact}
                            onChange={ceoRegister.onContactChange}
                            required
                        />
                    </FormGroup>
                </Col>
            </Row>
            {ceoRegister.passwordOne !== ceoRegister.passwordTwo
            && <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible>
                <Row className="bg-danger p-3 shadow rounded mb-1">
                    <Col>
                        <p className="text-white small p-0 m-0">
                        {ceoRegister.passwordOne !== ceoRegister.passwordTwo
                        && 'Password Tidak sama'
                        }
                        </p>
                    </Col>
                </Row>
            </Animated>
            }
            {ceoRegister.passwordOne.length > 0
            && ceoRegister.passwordOne.length < 8
            && <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible>
                <Row className="bg-danger p-3 shadow rounded mb-1">
                    <Col>
                        <p className="text-white small p-0 m-0">
                        {ceoRegister.passwordOne.length < 8
                        && 'Password Minimal 8 Karakter Dengan Kombinasi Angka dan Huruf'
                        }
                        </p>
                    </Col>
                </Row>
            </Animated>
            }
            <Row
                className="bg-white p-3 shadow rounded"
            >
                <Col
                    md={{
                        size:4,
                        offset:8
                    }}
                >
                    <Button className="float-right mt-1 shadow" size="sm" color="primary" block
                        disabled={(ceoRegister.passwordOne.length < 8) || (ceoRegister.passwordOne !== ceoRegister.passwordTwo)}
                    >
                        {ceoRegister.isLoading && <ReactLoading type="spin" color="white" height={24} width={24} className="ml-auto mr-auto" />}
                        {!ceoRegister.isLoading && 'Daftar'}
                    </Button>
                </Col>
            </Row>
        </Form>
        }
        </Consumer>;
    }
}
    

export default withRouter(CeoRegisterPage);