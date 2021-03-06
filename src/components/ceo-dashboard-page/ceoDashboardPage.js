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

import {database} from './../../firebase/firebase';
import {Consumer} from './../../context/context';

const INITIAL_STATE = {
    namaTim: '',
    sekolah: '',
    lunas: '',
    ketua: null,
    anggota1: null,
    anggota2: null,
    error: null
};

class CeoDashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('uid') || null;

        document.title = "Dashboard Peserta CEO";
        document.body.style.background = "#e3e3e3";

        if (uid) {
            database.ref('/pesertaCeo/' + uid).once('value')
            .then((snap) => {
                if(snap.val()) {
                    let {namaTim, sekolah, lunas, ketua, anggota1, anggota2} = snap.val();

                    this.setState({
                        namaTim,
                        sekolah,
                        lunas,
                        ketua,
                        anggota1,
                        anggota2
                    });
                } else {
                    // this.props.history.push('/daftar');                    
                }
            })
            .catch(error => {
                // this.props.history.push('/daftar');
            });
        } else {
            this.props.history.push('/daftar');
        }
    }

    render() {
        let {
            namaTim, 
            sekolah, 
            lunas, 
            ketua,
            anggota1,
            anggota2
        } = this.state;

        let isPendaftaranLengkap = ketua && anggota1 && anggota2; 

        return <div>
            <Navigator/>
            <Container style={{marginTop:'5rem'}}>
                {(!ketua || !anggota1 || !anggota2)
                && <Row
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
                </Row>}
                {!lunas
                && <Row
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
                        <Button size="sm" color="success" className="shadow"
                        tag={Link} to="/payment/ceo">Konfirmasi Pembayaran</Button>
                        </div>
                    </Col>
                </Row>
                }
                <Row
                    className="p-3 bg-white shadow rounded"
                >
                    <Col>
                        <div className="small">Nama Tim: {namaTim}</div>
                    </Col>
                    <Col>
                        <div className="small">Status Pembayaran: {lunas ? 'Lunas':'Belum Lunas'}</div>
                        <div className="small">Status Pendaftaran: {isPendaftaranLengkap ? 'Lengkap':'Belum Lengkap'}</div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export class Navigator extends Component {
    render() {
        return <Consumer>
        {({ceoLogin}) => 
        <Navbar className="shadow" color="light" light fixed="top">
            <Container>
                <NavbarBrand>CEO Dashboard</NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Button color="light" size="sm" tag={Link} to="/dashboard/ceo" className="shadow rounded mr-4 small">Beranda</Button>
                        <Button color="light" size="sm" tag={Link} to="/dashboard/ceo/edit-member/1" className="shadow rounded mr-4 small">Edit Biodata Anggota</Button>
                    </NavItem>
                    <NavItem>
                        <Button size="sm" color="danger" className="shadow" onClick={ceoLogin.onLogout}>Log Out</Button>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>}
        </Consumer>;
    }
}

export default withRouter(CeoDashboardPage);