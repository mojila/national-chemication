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

class AdminLoginPage extends Component {
    componentDidMount() {
        document.body.style.background = "#e3e3e3";
    }

    render() {
        return <Container className="mt-md-4">
            <Row>
                <Col
                    md={{size:4,offset:4}}
                >
                    <Form>
                        <Row
                            className="p-3 mb-1 shadow bg-white rounded"
                        >
                            <Col>
                                <div 
                                    className="small text-center text-capitalize"
                                >
                                    Admin Login
                                </div>
                            </Col>
                        </Row>
                        <Row
                            className="p-3 mb-1 shadow bg-danger rounded"
                        >
                            <Col>
                                <div class="small text-white text-center">Error</div>
                            </Col>
                        </Row>
                        <Row
                            className="p-3 mb-1 shadow bg-white rounded"
                        >
                            <Col md={{size:12}}>
                                <FormGroup>
                                    <Label size="sm">Email</Label>
                                    <Input size="sm" type="email" placeholder="Masukkan email"/>
                                </FormGroup>
                            </Col>
                            <Col md={{size:12}}>
                                <FormGroup>
                                    <Label size="sm">Password</Label>
                                    <Input size="sm" type="password" placeholder="Masukkan password"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row
                            className="p-3 mb-1 shadow bg-white rounded"
                        >
                            <Col md={{size:6,offset:6}}>
                                <Button size="sm" color="primary" block>Login</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>;
    }
}

export default AdminLoginPage;