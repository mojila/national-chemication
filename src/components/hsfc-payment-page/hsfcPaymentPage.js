import React, {Component} from 'react';
import {
    withRouter,
    Link
} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Progress
} from 'reactstrap';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/hsfc.jpeg';

class HsfcPaymentPage extends Component {
    componentDidMount() {
        document.title = "Bukti Pembayaran Peserta HSFC";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }

    render() {
        return <Container 
            className="mt-md-5 mb-5"
        >
            <Row>
                <Col
                    md={{
                        size:6,
                        offset:3
                    }}
                >
                    <Animated
                        animationIn="flipInY"
                        isVisible
                    >
                        <PaymentForm/>
                    </Animated>
                </Col>
            </Row>
        </Container>;
    }
}

const INITIAL_STATE = {
    error: null,
    imagePreview: null
};

const byKeyProp = (propertyName, value) => () => ({
    [propertyName]: value
});

class PaymentForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUpload = this.onUpload.bind(this);

        this.state = {...INITIAL_STATE};
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onUpload(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (e) => {
                this.setState(byKeyProp('imagePreview', e.target.result));
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    render() {
        let {imagePreview} = this.state;

        return <Form onSubmit={this.onSubmit} encType="multipart/form-data">
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col>
                    <Button size="sm" color="light" className="mt-2 shadow" tag={Link} to="/daftar">Beranda</Button>
                </Col>
                <Col>
                    <p className="mt-1 h6 text-uppercase text-right">
                        Konfirmasi Pembayaran
                    </p>
                </Col>
            </Row>
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col
                    md={{
                        size:12
                    }}
                >
                    <FormGroup>
                        <Label className="small">Nama Sekolah</Label>
                        <Input 
                            size="sm"
                            placeholder="Masukkan nama sekolah"
                        />
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <div className="small">Upload Bukti Transfer</div>
                </Col>
                <Col
                    md={{
                        size:12,
                        offset:0
                    }}
                >
                    <div 
                        className="bg-secondary p-3 rounded text-center text-capitalize small text-white">
                        {imagePreview
                            ? <img src={imagePreview} alt="Bukti Transfer" className="img-fluid"/>
                            : 'Silahkan upload bukti'
                        }
                    </div>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <FormGroup className="mt-1">
                        <Input type="file" className="small" onChange={this.onUpload}/>
                    </FormGroup>
                </Col>
                <Col
                    md={{
                        size:6,
                        offset:0
                    }}
                >
                    <Progress
                        value={10}
                        className="mt-2"
                        color="success"
                    />
                </Col>
            </Row>
            <Row
                className="p-3 bg-white shadow rounded"
            >
                <Col
                    md={{
                        size:6,
                        offset:6
                    }}
                >
                    <Button className="float-right shadow" color="primary" block>Konfirmasi</Button>
                </Col>
            </Row>
        </Form>
    }
}

export default withRouter(HsfcPaymentPage);