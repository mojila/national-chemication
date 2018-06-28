import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

import bgCeo from './../../statics/images/ceo.jpg';
import bgEssay from './../../statics/images/essay.jpg';
import bgHsfc from './../../statics/images/hsfc.jpeg';

const RegisterPage = () =>
    <Container className="mt-5">
        <RegisterCategory/>
    </Container>;

const RegisterCategory = () =>
    <Row>
        <CeoCategory/>
        <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgEssay +"')",
                backgroundSize: 'cover'
            }}
        >
            <div className="mt-4">
                <p 
                    className="h2 bg-white d-inline text-uppercase"
                >
                EC: Energy Competition
                </p>
            </div>
            <div className="mt-4">
                <div
                    className="bg-white p-2 rounded"
                >
                    <p className="text-capitalize">
                        Energy Competiotion (EC) merupakan kegiatan yang meliputi kompetisi KTI yang ditujukan untuk mahasiswa/i S1 atau diploma.
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" color="outline-success">Lihat Petunjuk</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Button className="rounded" color="success" block>LOGIN</Button>
                <Button className="rounded" color="primary" block>PENDAFTARAN</Button>
            </div>
        </Col>
        <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgHsfc +"')",
                backgroundSize: 'cover'
            }}
        >
            <div className="mt-4">
                <p 
                    className="h2 bg-white d-inline text-uppercase"
                >
                HSFC: High School Futsal Competition
                </p>
            </div>
            <div className="mt-4">
                <div
                    className="bg-white p-2 rounded"
                >
                    <p className="text-capitalize">
                    High School Futsal Competitiin (HSFC) merupakan kegiatan perlombaan futsal yang ditujuan untuk siswa/i SMK/SMA/MA Sederajat.
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" color="outline-success">Lihat Petunjuk</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Button className="rounded" color="success" block>LOGIN</Button>
                <Button className="rounded" color="primary" block>PENDAFTARAN</Button>
            </div>
        </Col>
    </Row>;

class CeoCategory extends Component {
    render() {
        return <Col 
            className="m-1 bg-white p-3 shadow rounded"
            style={{
                background: "url('"+ bgCeo +"')",
                backgroundSize: 'cover'
            }}
        >
            <div className="mt-4">
                <p 
                    className="h2 bg-white d-inline text-uppercase"
                >
                    CEO: Chemical Engineering Olympiad
                </p>
            </div>
            <div className="mt-4">
                <div
                    className="bg-white p-2 rounded"
                >
                    <p className="text-capitalize">
                    Chemical Engineering Olympiad (CEO) merupaan kegiatan kompetisi kimia yang ditujukan untuk siswa/i SMA/MA Sederajat.
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button size="sm" color="outline-success">Lihat Petunjuk</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Button className="rounded" color="success" block tag={Link} to="/login/ceo">LOGIN</Button>
                <Button className="rounded" color="primary" block>PENDAFTARAN</Button>
            </div>
        </Col>
    }
}

export default RegisterPage;