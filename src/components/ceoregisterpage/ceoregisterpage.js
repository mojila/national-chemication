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

import bg from './../../statics/images/ceo.jpg';

class CeoRegisterPage extends Component {
    componentDidMount() {
        document.title = "Pendaftaran Peserta CEO";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }
    
    render() {
        return <Container
            className="mt-md-5"
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
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <Form 
            onSubmit={this.onSubmit}
        >
            <Row 
                className="bg-white p-3 shadow rounded mb-1"
            >
                <Col>
                    <Button size="sm" tag={Link} to="/daftar">Kembali</Button>
                </Col>
                <Col>
                    <p className="h6 text-uppercase mt-1 text-right">Pendaftaran Akun</p>
                </Col>
            </Row>
            <Row
                className="bg-white p-3 shadow rounded mb-1"
            >
                isi
            </Row>
            <Row
                className="bg-white p-3 shadow rounded"
            >
                <Col
                    md={{
                        size:4,
                        offset:8
                    }}
                >
                    <Button className="float-right" size="sm" color="primary" block>Daftar</Button>
                </Col>
            </Row>
        </Form>;
    }
}
    

export default withRouter(CeoRegisterPage);