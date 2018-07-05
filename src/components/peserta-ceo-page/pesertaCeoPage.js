import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
    Badge
} from 'reactstrap';

import {Navigator} from './../admin-dashboard-page/adminDashboardPage';

class PesertaCeoPage extends Component {
    render() {
        return <div>
            <Navigator/>
            <DaftarPeserta/>
        </div>;
    }
}

class DaftarPeserta extends Component {
    render() {
        return <Container style={{marginTop: '72px'}} className="mb-4">
            <Row className="mb-1 p-3 bg-white shadow rounded">
                <Col md="8">
                    <p className="p-0 m-0">Daftar Peserta CEO</p>
                </Col>
                <Col md="4">
                    <Form onSubmit={e => e.preventDefault()}>
                        <FormGroup className="m-0 p-0">
                            <Input size="sm" placeholder="Pencarian"/>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col md="12">
                    <div className="p-2 border-bottom mb-1 d-flex justify-content-between">
                        <p className="small p-0 m-0">Nama Tim</p>
                        <p className="small p-0 m-0">Aksi</p>
                    </div>
                </Col>
                <Col md="12"
                style={{
                    height: '360px',
                    maxHeight: '360px',
                    overflowY: 'auto'
                }}>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-secondary" className="shadow mr-1">Lihat Bukti Pembayaran</Button>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                    <div className="p-2 border rounded mb-1 d-flex justify-content-between">
                        <div className="small">
                            <p className="float-left ml-1 m-0 p-0 text-capitalize">
                                adaw
                            </p>
                            <Badge color="warning" className="ml-1 mr-1 small">Belum Lunas</Badge>
                            <Badge color="warning" className="ml-1 mr-1 small">Biodata Belum Lengkap</Badge>
                        </div>
                        <div>
                            <Button size="sm" color="outline-success" className="shadow mr-1">Lunas</Button>
                            <Button size="sm" color="outline-danger" className="shadow">Hapus</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>;
    }
}

export default withRouter(PesertaCeoPage);