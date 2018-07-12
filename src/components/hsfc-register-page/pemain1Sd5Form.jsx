import React, {Component} from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

class Pemain1Sd5Form extends Component {
    state = {
    isPemain1: true,
    isPemain2: false,
    isPemain3: false,
    isPemain4: false,
    isPemain5: false,
    pemain1: {
        nama: '',
        kontak: '',
        kelahiran: {
        tempat: '',
        tanggal: ''
        },
        foto: '',
        nomorPunggung: '',
        kartuPelajar: '',
        rapor: ''
    },
    pemain2: {
        nama: '',
        kontak: '',
        kelahiran: {
        tempat: '',
        tanggal: ''
        },
        foto: '',
        nomorPunggung: '',
        kartuPelajar: '',
        rapor: ''
    },
    pemain3: {
        nama: '',
        kontak: '',
        kelahiran: {
        tempat: '',
        tanggal: ''
        },
        foto: '',
        nomorPunggung: '',
        kartuPelajar: '',
        rapor: ''
    },
    pemain4: {
        nama: '',
        kontak: '',
        kelahiran: {
        tempat: '',
        tanggal: ''
        },
        foto: '',
        nomorPunggung: '',
        kartuPelajar: '',
        rapor: ''
    },
    pemain5: {
        nama: '',
        kontak: '',
        kelahiran: {
        tempat: '',
        tanggal: ''
        },
        foto: '',
        nomorPunggung: '',
        kartuPelajar: '',
        rapor: ''
    }
    };

    componentDidMount() {
    this.setState({
        pemain1: {
        nama: sessionStorage.getItem('hsfc-register-pemain1-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain1-kontak') || "",
        kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain1-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain1-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain1-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain1-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain1-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain1-rapor') || ""
        },
        pemain2: {
        nama: sessionStorage.getItem('hsfc-register-pemain2-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain2-kontak') || "",
        kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain2-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain2-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain2-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain2-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain2-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain2-rapor') || ""
        },
        pemain3: {
        nama: sessionStorage.getItem('hsfc-register-pemain3-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain3-kontak') || "",
        kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain3-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain3-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain3-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain3-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain3-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain3-rapor') || ""
        },
        pemain4: {
        nama: sessionStorage.getItem('hsfc-register-pemain4-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain4-kontak') || "",
        kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain4-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain4-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain4-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain4-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain4-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain4-rapor') || ""
        },
        pemain5: {
        nama: sessionStorage.getItem('hsfc-register-pemain5-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain5-kontak') || "",
        kelahiran: {
            tempat: sessionStorage.getItem('hsfc-register-pemain5-tempatLahir') || "",
            tanggal: sessionStorage.getItem('hsfc-register-pemain5-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain5-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain5-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain5-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain5-rapor') || ""
        },
    });
    }

    onSubmit(e) {
    let {
        isPemain1,
        isPemain2,
        isPemain3,
        isPemain4,
        isPemain5,
        pemain1,
        pemain2,
        pemain3,
        pemain4,
        pemain5
    } = this.state;
    let {history} = this.props;

    if (isPemain1) {
        sessionStorage.setItem('hsfc-register-pemain1-nama', pemain1.nama);
        sessionStorage.setItem('hsfc-register-pemain1-kontak', pemain1.kontak);
        sessionStorage.setItem('hsfc-register-pemain1-tempatLahir', pemain1.kelahiran.tempat);
        sessionStorage.setItem('hsfc-register-pemain1-tanggalLahir', pemain1.kelahiran.tanggal);
        sessionStorage.setItem('hsfc-register-pemain1-foto', pemain1.foto);
        sessionStorage.setItem('hsfc-register-pemain1-nomorPunggung', pemain1.nomorPunggung);
        sessionStorage.setItem('hsfc-register-pemain1-kartuPelajar', pemain1.kartuPelajar);
        localStorage.setItem('hsfc-register-pemain1-rapor', pemain1.rapor);

        this.setState({
        isPemain1: false,
        isPemain2: true,
        isPemain3: false,
        isPemain4: false,
        isPemain5: false
        });
    } else if (isPemain2) {
        sessionStorage.setItem('hsfc-register-pemain2-nama', pemain2.nama);
        sessionStorage.setItem('hsfc-register-pemain2-kontak', pemain2.kontak);
        sessionStorage.setItem('hsfc-register-pemain2-tempatLahir', pemain2.kelahiran.tempat);
        sessionStorage.setItem('hsfc-register-pemain2-tanggalLahir', pemain2.kelahiran.tanggal);
        sessionStorage.setItem('hsfc-register-pemain2-foto', pemain2.foto);
        sessionStorage.setItem('hsfc-register-pemain2-nomorPunggung', pemain2.nomorPunggung);
        sessionStorage.setItem('hsfc-register-pemain2-kartuPelajar', pemain2.kartuPelajar);
        localStorage.setItem('hsfc-register-pemain2-rapor', pemain2.rapor);

        this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: true,
        isPemain4: false,
        isPemain5: false
        });
    } else if (isPemain3) {
        sessionStorage.setItem('hsfc-register-pemain3-nama', pemain3.nama);
        sessionStorage.setItem('hsfc-register-pemain3-kontak', pemain3.kontak);
        sessionStorage.setItem('hsfc-register-pemain3-tempatLahir', pemain3.kelahiran.tempat);
        sessionStorage.setItem('hsfc-register-pemain3-tanggalLahir', pemain3.kelahiran.tanggal);
        sessionStorage.setItem('hsfc-register-pemain3-foto', pemain3.foto);
        sessionStorage.setItem('hsfc-register-pemain3-nomorPunggung', pemain3.nomorPunggung);
        sessionStorage.setItem('hsfc-register-pemain3-kartuPelajar', pemain3.kartuPelajar);
        localStorage.setItem('hsfc-register-pemain3-rapor', pemain3.rapor);

        this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: false,
        isPemain4: true,
        isPemain5: false
        });
    } else if (isPemain4) {
        sessionStorage.setItem('hsfc-register-pemain4-nama', pemain4.nama);
        sessionStorage.setItem('hsfc-register-pemain4-kontak', pemain4.kontak);
        sessionStorage.setItem('hsfc-register-pemain4-tempatLahir', pemain4.kelahiran.tempat);
        sessionStorage.setItem('hsfc-register-pemain4-tanggalLahir', pemain4.kelahiran.tanggal);
        sessionStorage.setItem('hsfc-register-pemain4-foto', pemain4.foto);
        sessionStorage.setItem('hsfc-register-pemain4-nomorPunggung', pemain4.nomorPunggung);
        sessionStorage.setItem('hsfc-register-pemain4-kartuPelajar', pemain4.kartuPelajar);
        localStorage.setItem('hsfc-register-pemain4-rapor', pemain4.rapor);

        this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: false,
        isPemain4: false,
        isPemain5: true
        });
    } else if (isPemain5) {
        sessionStorage.setItem('hsfc-register-pemain5-nama', pemain5.nama);
        sessionStorage.setItem('hsfc-register-pemain5-kontak', pemain5.kontak);
        sessionStorage.setItem('hsfc-register-pemain5-tempatLahir', pemain5.kelahiran.tempat);
        sessionStorage.setItem('hsfc-register-pemain5-tanggalLahir', pemain5.kelahiran.tanggal);
        sessionStorage.setItem('hsfc-register-pemain5-foto', pemain5.foto);
        sessionStorage.setItem('hsfc-register-pemain5-nomorPunggung', pemain5.nomorPunggung);
        sessionStorage.setItem('hsfc-register-pemain5-kartuPelajar', pemain5.kartuPelajar);
        localStorage.setItem('hsfc-register-pemain5-rapor', pemain5.rapor);

        history.push('/daftar/hsfc/4');
    }

    e.preventDefault();
    }

    render() {
    let {
        isPemain1,
        isPemain2,
        isPemain3,
        isPemain4,
        isPemain5,
        pemain1,
        pemain2,
        pemain3,
        pemain4,
        pemain5
    } = this.state;
    let {history} = this.props;

    return (
        <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="p-3 bg-white shadow rounded mb-1">
            <Col md="12">
            <p className="text-center mb-1 p-0">Pemain 1 s/d 5</p>
            </Col>
            <Col md={{size: 2, offset: 1}}>
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain1 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({
                isPemain1: true,
                isPemain2: false,
                isPemain3: false,
                isPemain4: false,
                isPemain5: false
                })}
            >Pemain 1</div>
            </Col>
            <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain2 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({
                isPemain1: false,
                isPemain2: true,
                isPemain3: false,
                isPemain4: false,
                isPemain5: false
                })}
            >Pemain 2</div>
            </Col>
            <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain3 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({
                isPemain1: false,
                isPemain2: false,
                isPemain3: true,
                isPemain4: false,
                isPemain5: false
                })}
            >Pemain 3</div>
            </Col>
            <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain4 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({
                isPemain1: false,
                isPemain2: false,
                isPemain3: false,
                isPemain4: true,
                isPemain5: false
                })}
            >Pemain 4</div>
            </Col>
            <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain5 ? "bg-primary text-white":"bg-light")}
                onClick={() => this.setState({
                isPemain1: false,
                isPemain2: false,
                isPemain3: false,
                isPemain4: false,
                isPemain5: true
                })}
            >Pemain 5</div>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain1}>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={pemain1.nama}
                onChange={(e) => {
                    pemain1.nama = e.target.value;

                    this.setState({pemain1});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
                <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain1.kelahiran.tempat}
                    onChange={(e) => {
                    pemain1.kelahiran.tempat = e.target.value;

                    this.setState({pemain1});
                    }}
                    
                />
                <Input type="date" size="sm" value={pemain1.kelahiran.tanggal}
                    onChange={(e) => {
                    pemain1.kelahiran.tanggal = e.target.value;

                    this.setState({pemain1});
                    }}
                    
                />
                </div>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nomor Punggung</Label>
                <Input size="sm" value={pemain1.nomorPunggung}
                onChange={(e) => {
                    pemain1.nomorPunggung = e.target.value;

                    this.setState({pemain1});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Kontak (wa/line)</Label>
                <Input size="sm" value={pemain1.kontak}
                onChange={(e) => {
                    pemain1.kontak = e.target.value;

                    this.setState({pemain1});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain1.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain1.foto
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain1.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain1.foto = e.target.result;

                        this.setState({
                            pemain1
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Scan Kartu pelajar</Label>
                {!pemain1.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain1.kartuPelajar
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain1.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain1.kartuPelajar = e.target.result;

                        this.setState({
                            pemain1
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">Scan Rapor (hanya bagian biodata siswa)</Label>
                {pemain1.rapor
                && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
                </div>}
                {!pemain1.rapor
                && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File Hasil Scan
                </div>}
                <Input className="small" type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        pemain1.rapor = e.target.result;

                        this.setState({
                        pemain1
                        });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                    }
                }}
                />
            </FormGroup>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain2}>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={pemain2.nama}
                onChange={(e) => {
                    pemain2.nama = e.target.value;

                    this.setState({pemain2});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
                <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain2.kelahiran.tempat}
                    onChange={(e) => {
                    pemain2.kelahiran.tempat = e.target.value;

                    this.setState({pemain2});
                    }}
                    
                />
                <Input type="date" size="sm" value={pemain2.kelahiran.tanggal}
                    onChange={(e) => {
                    pemain2.kelahiran.tanggal = e.target.value;

                    this.setState({pemain2});
                    }}
                    
                />
                </div>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nomor Punggung</Label>
                <Input size="sm" value={pemain2.nomorPunggung}
                onChange={(e) => {
                    pemain2.nomorPunggung = e.target.value;

                    this.setState({pemain2});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Kontak (wa/line)</Label>
                <Input size="sm" value={pemain2.kontak}
                onChange={(e) => {
                    pemain2.kontak = e.target.value;

                    this.setState({pemain2});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain2.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain2.foto
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain2.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain2.foto = e.target.result;

                        this.setState({
                            pemain2
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Scan Kartu pelajar</Label>
                {!pemain2.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain2.kartuPelajar
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain2.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain2.kartuPelajar = e.target.result;

                        this.setState({
                            pemain2
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">Scan Rapor (Hanya Bagian Biodata)</Label>
                {pemain2.rapor
                && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
                </div>}
                {!pemain2.rapor
                && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File Hasil Scan
                </div>}
                <Input className="small" type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        pemain2.rapor = e.target.result;

                        this.setState({
                        pemain2
                        });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                    }
                }}
                />
            </FormGroup>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain3}>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={pemain3.nama}
                onChange={(e) => {
                    pemain3.nama = e.target.value;

                    this.setState({pemain3});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
                <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain3.kelahiran.tempat}
                    onChange={(e) => {
                    pemain3.kelahiran.tempat = e.target.value;

                    this.setState({pemain3});
                    }}
                    
                />
                <Input type="date" size="sm" value={pemain3.kelahiran.tanggal}
                    onChange={(e) => {
                    pemain3.kelahiran.tanggal = e.target.value;

                    this.setState({pemain3});
                    }}
                    
                />
                </div>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nomor Punggung</Label>
                <Input size="sm" value={pemain3.nomorPunggung}
                onChange={(e) => {
                    pemain3.nomorPunggung = e.target.value;

                    this.setState({pemain3});
                }}
                
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Kontak (wa/line)</Label>
                <Input size="sm" value={pemain3.kontak}
                onChange={(e) => {
                    pemain3.kontak = e.target.value;

                    this.setState({pemain3});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain3.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain3.foto
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain3.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain3.foto = e.target.result;

                        this.setState({
                            pemain3
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Scan Kartu pelajar</Label>
                {!pemain3.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain3.kartuPelajar
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain3.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain3.kartuPelajar = e.target.result;

                        this.setState({
                            pemain3
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">Scan Rapor (Hanya Bagian Biodata)</Label>
                {pemain3.rapor
                && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
                </div>}
                {!pemain3.rapor
                && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File Hasil Scan
                </div>}
                <Input className="small" type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        pemain3.rapor = e.target.result;

                        this.setState({
                        pemain3
                        });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                    }
                }}
                />
            </FormGroup>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain4}>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={pemain4.nama}
                onChange={(e) => {
                    pemain4.nama = e.target.value;

                    this.setState({pemain4});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
                <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain4.kelahiran.tempat}
                    onChange={(e) => {
                    pemain4.kelahiran.tempat = e.target.value;

                    this.setState({pemain4});
                    }}
                />
                <Input type="date" size="sm" value={pemain4.kelahiran.tanggal}
                    onChange={(e) => {
                    pemain4.kelahiran.tanggal = e.target.value;

                    this.setState({pemain4});
                    }}
                />
                </div>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nomor Punggung</Label>
                <Input size="sm" value={pemain4.nomorPunggung}
                onChange={(e) => {
                    pemain4.nomorPunggung = e.target.value;

                    this.setState({pemain4});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Kontak (wa/line)</Label>
                <Input size="sm" value={pemain4.kontak}
                onChange={(e) => {
                    pemain4.kontak = e.target.value;

                    this.setState({pemain4});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain4.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain4.foto
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain4.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain4.foto = e.target.result;

                        this.setState({
                            pemain4
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Scan Kartu pelajar</Label>
                {!pemain4.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain4.kartuPelajar
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain4.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain4.kartuPelajar = e.target.result;

                        this.setState({
                            pemain4
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">Scan Rapor (Hanya Bagian Biodata)</Label>
                {pemain4.rapor
                && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
                </div>}
                {!pemain4.rapor
                && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File Hasil Scan
                </div>}
                <Input className="small" type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        pemain4.rapor = e.target.result;

                        this.setState({
                        pemain4
                        });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                    }
                }}
                />
            </FormGroup>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain5}>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nama</Label>
                <Input size="sm" value={pemain5.nama}
                onChange={(e) => {
                    pemain5.nama = e.target.value;

                    this.setState({pemain5});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
                <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain5.kelahiran.tempat}
                    onChange={(e) => {
                    pemain5.kelahiran.tempat = e.target.value;

                    this.setState({pemain5});
                    }}
                />
                <Input type="date" size="sm" value={pemain5.kelahiran.tanggal}
                    onChange={(e) => {
                    pemain5.kelahiran.tanggal = e.target.value;

                    this.setState({pemain5});
                    }}
                />
                </div>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Nomor Punggung</Label>
                <Input size="sm" value={pemain5.nomorPunggung}
                onChange={(e) => {
                    pemain5.nomorPunggung = e.target.value;

                    this.setState({pemain5});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Kontak (wa/line)</Label>
                <Input size="sm" value={pemain5.kontak}
                onChange={(e) => {
                    pemain5.kontak = e.target.value;

                    this.setState({pemain5});
                }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain5.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain5.foto
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain5.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain5.foto = e.target.result;

                        this.setState({
                            pemain5
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">Scan Kartu pelajar</Label>
                {!pemain5.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                    Silahkan Pilih Foto
                </div>}
                {pemain5.kartuPelajar
                && <div className="mb-1">
                    <img alt="Gambar Gagal Dimuat" src={pemain5.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        let reader = new FileReader();

                        reader.onload = (e) => {
                        pemain5.kartuPelajar = e.target.result;

                        this.setState({
                            pemain5
                        });
                        };

                        reader.readAsDataURL(e.target.files[0]);
                    }
                    }}
                />
            </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
                <Label className="small text-uppercase">Scan Rapor (Hanya Bagian Biodata)</Label>
                {pemain5.rapor
                && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
                </div>}
                {!pemain5.rapor
                && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File Hasil Scan
                </div>}
                <Input className="small" type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                        pemain5.rapor = e.target.result;

                        this.setState({
                        pemain5
                        });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                    }
                }}
                />
            </FormGroup>
            </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded">
            <Col md="6">
            <Button color="light" className="shadow" block
                onClick={() => {
                if (isPemain2) {
                    this.setState({
                    isPemain1: true,
                    isPemain2: false,
                    isPemain3: false,
                    isPemain4: false,
                    isPemain5: false
                    });
                } else if (isPemain3) {
                    this.setState({
                    isPemain1: false,
                    isPemain2: true,
                    isPemain3: false,
                    isPemain4: false,
                    isPemain5: false
                    });
                } else if (isPemain4) {
                    this.setState({
                    isPemain1: false,
                    isPemain2: false,
                    isPemain3: true,
                    isPemain4: false,
                    isPemain5: false
                    });
                } else if (isPemain5) {
                    this.setState({
                    isPemain1: false,
                    isPemain2: false,
                    isPemain3: false,
                    isPemain4: true,
                    isPemain5: false
                    });
                } else {
                    history.push('/daftar/hsfc/2');
                }
                }}
            >Sebelumnya</Button>
            </Col>
            <Col md="6">
            <Button color="primary" className="shadow" block>Selanjutnya</Button>
            </Col>
        </Row>
        </Form>
    );
    }
}

export default Pemain1Sd5Form;