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
            onSubmit={this.onSubmit}
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
                            value={email} 
                            placeholder="Contoh: saya@domain.com"
                            onChange={e => this.setState(byPropKey('email', e.currentTarget.value))}
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
                            value={password} 
                            placeholder="Isi Password dengan benar"
                            onChange={e => this.setState(byPropKey('password', e.currentTarget.value))}
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
                    <Button className="text-uppercase shadow" color="success" block disabled={!isValid}>Login</Button>
                </Col>
            </Row>
            {
                error
                ? <Animated
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        isVisible={true}
                    >
                        <Row
                            className="p-3 mb-1 bg-white rounded shadow"
                        >
                            <Col>
                                <div className="mt-3">
                                    <p class="text-white text-center font-weight-bold small">{error}</p>
                                </div>
                            </Col>
                        </Row>
                    </Animated>
                : ''
            }
            <Row 
                className="pt-3 mb-1 bg-white rounded shadow"
            >
                <Col>
                    <p className="small text-center">
                        Belum Daftar ? Silahkan 
                        | <Button className="shadow" size="sm" color="primary" tag={Link} to="/daftar/ceo">Daftar Disini</Button>
                    </p>
                </Col>
            </Row>
        </Form>;
    }
}

export default withRouter(CeoLoginPage);