import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {Animated} from 'react-animated-css';

import bgCeo from './../../statics/images/ceo.jpg';
import bgEssay from './../../statics/images/essay.jpg';
import bgHsfc from './../../statics/images/hsfc.jpeg';

class RegisterPage extends Component {
    componentDidMount() {
        document.title = "National Chemication : Pendaftaran dan Login";
        document.body.style.background = "#f1f1f1";
    }

    render() {
        return  <Container>
            <RegisterCategory/>
        </Container>;
    }
}
    

const RegisterCategory = () =>
    <Row className="mt-md-5">
        <CeoCategory/>
        <EcCategory/>
        <HsfcCategory/>
    </Row>;

class CeoCategory extends Component {
    constructor(props) {
        super(props);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);

        this.state = {
            isFocus: false
        };
    }

    onMouseOver() {
        this.setState({
            isFocus: true
        });
    }

    onMouseLeave() {
        this.setState({
            isFocus: false
        });
    }

    render() {
        let {isFocus} = this.state;

        return <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgCeo +"')",
                backgroundSize: 'cover'
            }}
        >
            <div
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                <div className="mt-4">
                    <p 
                        className="h2 bg-white d-inline text-uppercase"
                    >
                        CEO: Chemical Engineering Olympiad
                    </p>
                </div>
                <Animated animationIn="flipInY" animationOut="flipOutY" className="mt-4" isVisible={isFocus}>
                    <div
                        className="bg-white p-3 rounded shadow"
                    >
                        <p className="text-capitalize small">
                            Chemical Engineering Olympiad (CEO) merupaan kegiatan kompetisi kimia yang ditujukan untuk siswa/i SMA/MA Sederajat.
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button size="sm" color="secondary" className="shadow">Lihat Petunjuk</Button>
                        </div>
                    </div>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOutDown" className="mt-4" isVisible={isFocus}>
                    <Button className="text-uppercase shadow" color="success" block tag={Link} to="/login/ceo">login</Button>
                    <Button className="text-uppercase shadow" color="primary" block tag={Link} to="/daftar/ceo">pendaftaran</Button>
                    <Button className="text-uppercase text-white shadow" color="warning" block tag={Link} to="/payment/ceo">konfirmasi pembayaran</Button>
                </Animated>
            </div>
        </Col>
    }
}

class EcCategory extends Component {
    constructor(props) {
        super(props);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);

        this.state = {
            isFocus: false
        };
    }

    onMouseOver() {
        this.setState({
            isFocus: true
        });
    }

    onMouseLeave() {
        this.setState({
            isFocus: false
        });
    }

    render() {
        let {isFocus} = this.state;

        return <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgEssay +"')",
                backgroundSize: 'cover'
            }}
        >
            <div
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                <div className="mt-4">
                    <p 
                        className="h2 bg-white d-inline text-uppercase"
                    >
                    EC: Energy Competition
                    </p>
                </div>
                <Animated animationIn="flipInY" animationOut="flipOutY" className="mt-4" isVisible={isFocus}>
                    <div
                        className="bg-white p-3 rounded shadow"
                    >
                        <p className="text-capitalize small">
                            Energy Competition (EC) adalah kompetisi karya tulis ilmiah dalam bidang yang ditujukan untuk Mahasiswa/Mahasiswi S1/Diploma se-Indonesia.
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button size="sm" color="secondary" className="shadow">Lihat Petunjuk</Button>
                        </div>
                    </div>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOutDown" className="mt-4" isVisible={isFocus}>
                    <Button className="shadow" color="primary" block>PENDAFTARAN</Button>
                </Animated>
            </div>
        </Col>;
    }
}

class HsfcCategory extends Component {
    constructor(props) {
        super(props);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);

        this.state = {
            isFocus: false
        };
    }

    onMouseOver() {
        this.setState({
            isFocus: true
        });
    }

    onMouseLeave() {
        this.setState({
            isFocus: false
        });
    }

    render() {
        let {isFocus} = this.state;

        return <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgHsfc +"')",
                backgroundSize: 'cover'
            }}
        >
            <div
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                <div className="mt-4">
                    <p 
                        className="h2 bg-white d-inline text-uppercase"
                    >
                    HSFC: High School Futsal Competition
                    </p>
                </div>
                <Animated animationIn="flipInY" animationOut="flipOutY" className="mt-4" isVisible={isFocus}>
                    <div
                        className="bg-white p-3 rounded shadow"
                    >
                        <p className="text-capitalize small">
                        High School Futsal Competition (HSFC) merupakan kegiatan perlombaan futsal yang ditujuan untuk siswa/i SMK/SMA/MA Sederajat.
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button size="sm" color="secondary" className="shadow">Lihat Petunjuk</Button>
                        </div>
                    </div>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOutDown" className="mt-4" isVisible={isFocus}>
                    <Button className="shadow" color="primary" block>PENDAFTARAN</Button>
                    <Button className="text-white" color="warning" block tag={Link} to="/payment/hsfc">KONFIRMASI PEMBAYARAN</Button>
                </Animated>
            </div>
        </Col>
    }
}

export default withRouter(RegisterPage);