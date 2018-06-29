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
import {Link} from 'react-router-dom';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/ceo.jpg';

class CeoLoginPage extends Component {
    componentDidMount() {
        document.title = "Login Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }
    
    render() {
        return <Container className="mt-5"> 
            <Row>
                <Col md={{size: 6, offset: 3}}>
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
    
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {...INITIAL_STATE};
    }
    
    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {email, password, error} = this.state;
        let isValid = email !== ''
                    && password !== '';

        return <Form 
            className="p-3 rounded shadow bg-white"
            onSubmit={this.onSubmit}
        >
            <Row className="border-bottom pb-2 mb-2">
                <Col>
                    <Button size="sm" tag={Link} to="/daftar">Kembali</Button>
                </Col>
                <Col>
                    <p className="text-uppercase h6 mt-1 text-right">
                        Login Peserta CEO
                    </p>
                </Col>
            </Row>
            <Row>
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
                            value={email} 
                            placeholder="Contoh: saya@domain.com"
                            onChange={e => this.setState(byPropKey('email', e.currentTarget.value))}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
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
                            value={password} 
                            placeholder="Isi Password dengan benar"
                            onChange={e => this.setState(byPropKey('password', e.currentTarget.value))}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col
                    md={{
                        size:10,
                        offset:1
                    }}
                >
                    <Button className="text-uppercase" color="success" block disabled={!isValid}>Login</Button>
                </Col>
            </Row>
            {
                error
                ? <Animated
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        isVisible={true}
                    >
                        <Row className="border-top bg-danger">
                            <Col>
                                <div className="mt-3">
                                    <p class="text-white text-center font-weight-bold small">{error}</p>
                                </div>
                            </Col>
                        </Row>
                    </Animated>
                : ''
            }
            <Row className="border-top">
                <Col>
                    <div className="mt-3">
                        <p className="small text-center">Belum Daftar ? Silahkan <Button size="sm">Daftar Disini</Button></p>
                    </div>
                </Col>
            </Row>
        </Form>;
    }
}

export default CeoLoginPage;