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
            className="mt-md-4"
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

const INITIAL_STATE = {
    teamName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    schoolName: '',
    leader: '',
    leaderPhone: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {...INITIAL_STATE};
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {
            teamName,
            email,
            passwordOne,
            passwordTwo,
            schoolName,
            leader,
            leaderPhone,
            error
        } = this.state;

        let isValid = teamName !== ''
                    && email !== ''
                    && passwordOne !== ''
                    && passwordTwo !== ''
                    && passwordOne === passwordTwo
                    && schoolName !== ''
                    && leader !== ''
                    && leaderPhone !== '';
        
        let isPasswordSame = passwordOne === passwordTwo;

        return <Form 
            onSubmit={this.onSubmit}
        >
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
                            value={teamName}
                            onChange={e => this.setState(byPropKey('teamName', e.currentTarget.value))} 
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
                            value={email}
                            onChange={e => this.setState(byPropKey('email', e.currentTarget.value))}  
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
                            value={passwordOne}
                            onChange={e => this.setState(byPropKey('passwordOne', e.currentTarget.value))}
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
                            value={passwordTwo}
                            onChange={e => this.setState(byPropKey('passwordTwo', e.currentTarget.value))} 
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
                        <Label className="small">Nama Sekolah</Label>
                        <Input 
                            size="sm" 
                            placeholder="Masukkan nama sekolah"
                            value={schoolName}
                            onChange={e => this.setState(byPropKey('schoolName', e.currentTarget.value))}
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
                        <Label className="small">Nama Ketua</Label>
                        <Input 
                            size="sm"
                            placeholder="Masukkan nama ketua"
                            value={leader}
                            onChange={e => this.setState(byPropKey('leader', e.currentTarget.value))}
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
                        <Label className="small">Nomor HP Ketua</Label>
                        <Input 
                            size="sm"
                            placeholder="Masukkan nomor hp ketua"
                            value={leaderPhone}
                            onChange={e => this.setState(byPropKey('leaderPhone', e.currentTarget.value))}                            
                            required
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row
                className="bg-white p-3 shadow rounded"
            >
                <Col 
                    md={{
                        size:8,
                        offset:0
                    }} 
                >
                    <p className="small text-danger mt-2">
                        {error}
                        {
                            !error && isPasswordSame
                            ? ''
                            : 'Password Tidak Sama'
                        }
                    </p>
                </Col>
                <Col
                    md={{
                        size:4,
                        offset:0
                    }}
                >
                    <Button className="float-right mt-1 shadow" size="sm" color="primary" block disabled={!isValid}>Daftar</Button>
                </Col>
            </Row>
        </Form>;
    }
}
    

export default withRouter(CeoRegisterPage);