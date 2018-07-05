import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';
import {Link,withRouter} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';

import bg from './../../statics/images/ceo.jpg';
import {Consumer} from './../../context/context';

class CeoLoginPage extends Component {
    componentDidMount() {
        let uid = localStorage.getItem('uid') || null;

        document.title = "Login Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";

        if (uid) {
            this.props.history.push('/dashboard/ceo');
        }
    }
    
    render() {
        return <Container className="mt-5"> 
            <Row>
                <Col md={{size: 4, offset: 4}}>
                    <Animated
                        isVisible={true}
                        animationIn="flipInY"
                        animationOut="flipOutY"
                    >
                        <FormLogin/>
                    </Animated>
                </Col>
            </Row>
        </Container>;
    }
}

class FormLogin extends Component {
    render() {
        return <Consumer>
        {
            ({ceoLogin}) => 
            <Form
                onSubmit={ceoLogin.onLogin}
            >
                <Row 
                    className="p-3 mb-1 bg-white rounded shadow"
                >
                    <Col>
                        <Button size="sm" tag={Link} to="/daftar" color="light" className="shadow">Beranda</Button>
                    </Col>
                    <Col>
                        <p className="text-uppercase h6 text-right">
                            Login Peserta CEO
                        </p>
                    </Col>
                </Row>
                {
                    ceoLogin.error
                    ? <Animated
                            animationIn="fadeIn"
                            animationOut="fadeOut"
                            isVisible={true}
                        >
                            <Row
                                className="p-3 mb-1 bg-danger rounded shadow"
                            >
                                <Col>
                                    <p className="text-white text-center font-weight-bold small">{ceoLogin.error.message}</p>
                                </Col>
                            </Row>
                        </Animated>
                    : ''
                }
                <Row
                    className="p-3 mb-1 bg-white rounded shadow"
                >
                    <Col 
                        md={{
                            size:10,
                            offset:1
                        }}
                    >
                        <FormGroup>
                            <Label className="small">E-Mail</Label>
                            <Input 
                                type="email" 
                                value={ceoLogin.email} 
                                placeholder="Contoh: saya@domain.com"
                                onChange={ceoLogin.onEmailChange}
                                size="sm"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:10,
                            offset:1
                        }}
                    >
                        <FormGroup>
                            <Label className="small">Password</Label>
                            <Input 
                                type="password" 
                                value={ceoLogin.password} 
                                placeholder="Isi Password dengan benar"
                                onChange={ceoLogin.onPasswordChange}
                                size="sm"
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row
                    className="p-3 mb-1 bg-white rounded shadow"
                >
                    <Col
                        md={{
                            size:10,
                            offset:1
                        }}
                    >
                        <Button className="text-uppercase shadow" color="success" block
                            disabled={ceoLogin.email.length < 4 || ceoLogin.password.length < 4}
                        >
                            {ceoLogin.isLoading && <ReactLoading type="spin" color="white" height={24} width={24} className="ml-auto mr-auto" />}
                            {!ceoLogin.isLoading && 'Login'}
                        </Button>
                    </Col>
                </Row>
                <Row 
                    className="pt-3 mb-1 bg-white rounded shadow"
                >
                    <Col>
                        <p className="small text-center">
                            Belum Daftar ? Silahkan 
                            | <Button className="shadow" size="sm" color="primary" tag={Link} to="/daftar/ceo"
                            >Daftar Disini</Button>
                        </p>
                    </Col>
                </Row>
            </Form>
        }
        </Consumer>;
    }
}

export default withRouter(CeoLoginPage);