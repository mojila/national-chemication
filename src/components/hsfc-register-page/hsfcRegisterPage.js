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
                <Row className="mt-4">
                    {Number(match.params.step) === 1
                    && <InfoDasarForm/>}
                </Row>
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

        return <Col
            md={{
                size:6,
                offset:3
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
    }
}

export default HsfcRegisterPage;