import React, {Component} from 'react';
import {
    withRouter,
    Link
} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Badge
} from 'reactstrap';

class CeoDashboardPage extends Component {
    componentDidMount() {
        document.title = "Dashboard Peserta CEO";
        document.body.style.background = "#e3e3e3";
    }

    render() {
        return <div>
            <Navigator/>
            <Container style={{marginTop:'5rem'}}>
                <Row
                    className="p-3 bg-warning shadow rounded mb-1"
                >
                    <Col>
                        <div className="small text-capitalize">
                            <span className="font-weight-bold">Peringatan: </span> Biodata Peserta Belum Lengkap, Silahkan mengisi biodata secara lengkap
                        </div>
                    </Col>
                    <Col>
                        <Button size="sm" color="light" className="shadow float-right" tag={Link} to="/dashboard/ceo/edit-member/1">Lengkapi Biodata Sekarang</Button>
                    </Col>
                </Row>
                <Row
                    className="p-3 bg-warning shadow rounded mb-1"
                >
                    <Col>
                        <div className="small text-capitalize">
                            <span className="font-weight-bold">Peringatan: </span> Silahkan melunasi biaya pendaftaran sebesar <Badge>Rp. 90.000,-</Badge> 
                            Untuk Tanggal Promo 2 Juli - 14 Oktober.
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-end">
                        <Button size="sm" color="light" className="shadow mr-1">Petunjuk Pembayaran</Button>
                        <Button size="sm" color="success" className="shadow">Konfirmasi Pembayaran</Button>
                        </div>
                    </Col>
                </Row>
                <Row
                    className="p-3 bg-white shadow rounded"
                >
                    <Col>
                        <div className="small">Nama Tim: nama_team</div>
                    </Col>
                    <Col>
                        <div className="small">Status Pembayaran: Belum Lunas</div>
                        <div className="small">Status Pendaftaran: Belum Selesai</div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export class Navigator extends Component {
    render() {
        return <Navbar className="shadow" color="light" light fixed="top">
            <Container>
                <NavbarBrand>CEO Dashboard</NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Button color="light" size="sm" tag={Link} to="/dashboard/ceo" className="shadow rounded mr-4 small">Beranda</Button>
                        <Button color="light" size="sm" tag={Link} to="/dashboard/ceo/edit-member/1" className="shadow rounded mr-4 small">Edit Biodata Anggota</Button>
                    </NavItem>
                    <NavItem>
                        <Button size="sm" color="danger" className="shadow">Log Out</Button>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>;
    }
}

export default withRouter(CeoDashboardPage);