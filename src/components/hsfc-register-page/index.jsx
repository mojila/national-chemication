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
    withRouter
} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

import {database} from './../../firebase/firebase';
import bg from './../../statics/images/hsfc.jpeg';

class HsfcRegisterPage extends Component {
  componentDidMount() {
    document.title = "Pendaftaran Peserta HSFC";
    document.body.style.background = "url('"+bg+"')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    let {match, history} = this.props;

    return (
      <Container className="mt-md-4 mb-4">
        {match.params.step !== "finish"
        && <Animated isVisible animationIn="fadeIn">
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
        </Animated>}
        <Animated animationIn="flipInY" animationOut="flipOutY" isVisible>
          <Row className="mt-4">
            {Number(match.params.step) === 1
            && <Col md={{size: 6, offset: 3}}>
              <InfoDasarForm history={history}/>
            </Col>}
            {Number(match.params.step) === 2
            && <Col md={{size: 6, offset: 3}}>
              <OfficialForm history={history}/>
            </Col>}
            {Number(match.params.step) === 3
            && <Col md={{size: 8, offset: 2}}>
              <Pemain1Sd5Form history={history}/>
            </Col>}
            {Number(match.params.step) === 4
            && <Col md={{size: 8, offset: 2}}>
              <Pemain6Sd10Form history={history}/>
            </Col>}
            {match.params.step === "finish"
            && <Col md={{size: 6, offset: 3}}>
              <Finish history={history}/>
            </Col>}
          </Row>
        </Animated>
      </Container>
    );
  }
}

class InfoDasarForm extends Component {
  state = {
    namaSekolah: '',
    kota: '',
    kontak: '',
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      namaSekolah: sessionStorage.getItem('hsfc-register-infoDasar-namaSekolah') || "",
      kota: sessionStorage.getItem('hsfc-register-infoDasar-kota') || "",
      kontak: sessionStorage.getItem('hsfc-register-infoDasar-kontak') || ""
    });
  }

  onSubmit(e) {
    let {
      namaSekolah,
      kota,
      kontak
    } = this.state;
    let {history} = this.props;

    sessionStorage.setItem('hsfc-register-infoDasar-namaSekolah', namaSekolah);
    sessionStorage.setItem('hsfc-register-infoDasar-kota', kota);
    sessionStorage.setItem('hsfc-register-infoDasar-kontak', kontak);

    history.push('/daftar/hsfc/2');

    e.preventDefault();
  }

  render() {
    let {
      namaSekolah,
      kota,
      kontak
    } = this.state;
    let {history} = this.props;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <Button className="shadow" color="light" size="sm"
              onClick={() => history.push('/daftar')}
            >Beranda</Button>
          </Col>
          <Col>
            <p className="p-0 m-0 text-right">Info Dasar</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="12">
            <FormGroup>
              <Label className="small text-uppercase">Nama Sekolah</Label>
              <Input size="sm"
                value={namaSekolah}
                onChange={(e) => this.setState({namaSekolah: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kota</Label>
              <Input size="sm"
                value={kota}
                onChange={(e) => this.setState({kota: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">No. Telp Sekolah</Label>
              <Input size="sm"
                value={kontak}
                onChange={(e) => this.setState({kontak: e.target.value})}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col md={{size:6, offset:6}}>
            <Button color="primary" className="shadow" block>Selanjutnya</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

class OfficialForm extends Component {
  state = {
    official1: {
      nama: '',
      kontak: '',
      foto: ''
    },
    official2: {
      nama: '',
      kontak: '',
      foto: ''
    },
    isOfficial1: true,
    isOfficial2: false
  };

  componentDidMount() {
    this.setState({
      official1: {
        nama: sessionStorage.getItem('hsfc-register-official1-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-official1-kontak') || "",
        foto: sessionStorage.getItem('hsfc-register-official1-foto') || ""
      },
      official2: {
        nama: sessionStorage.getItem('hsfc-register-official2-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-official2-kontak') || "",
        foto: sessionStorage.getItem('hsfc-register-official2-foto') || ""
      }
    });
  }

  onSubmit(e) {
    let {history} = this.props;
    let {
      official1,
      official2,
      isOfficial1
    } = this.state;

    if (isOfficial1) {
      sessionStorage.setItem('hsfc-register-official1-nama', official1.nama);
      sessionStorage.setItem('hsfc-register-official1-kontak', official1.kontak);
      sessionStorage.setItem('hsfc-register-official1-foto', official1.foto);

      this.setState({
        isOfficial1: false,
        isOfficial2: true
      })
    } else {
      sessionStorage.setItem('hsfc-register-official2-nama', official2.nama);
      sessionStorage.setItem('hsfc-register-official2-kontak', official2.kontak);
      sessionStorage.setItem('hsfc-register-official2-foto', official2.foto);

      history.push('/daftar/hsfc/3');
    }

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      official1,
      official2,
      isOfficial1,
      isOfficial2
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="p-3 bg-white shadow rounded mb-1">
          <Col md="12">
            <p className="text-center mb-1 p-0">Official</p>
          </Col>
          <Col md="6">
            <div className={"pointer p-1 shadow small text-center rounded " + (isOfficial1 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({isOfficial1: true, isOfficial2: false})}
            >Official 1</div>
          </Col>
          <Col md="6">
            <div className={"pointer p-1 shadow small text-center rounded " + (isOfficial2 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({isOfficial1: false, isOfficial2: true})}
            >Official 2</div>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isOfficial1}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={official1.nama}
                onChange={(e) => {
                  official1.nama = e.target.value;

                  this.setState({...official1});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">kontak (wa/line)</Label>
              <Input size="sm" value={official1.kontak}
                onChange={(e) => {
                  official1.kontak = e.target.value;

                  this.setState({...official1});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!official1.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {official1.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={official1.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        official1.foto = e.target.result;

                        this.setState({
                          official1
                        });
                      };

                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isOfficial2}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={official2.nama}
                onChange={(e) => {
                  official2.nama = e.target.value;

                  this.setState({...official2});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">kontak (wa/line)</Label>
              <Input size="sm" value={official2.kontak}
                onChange={(e) => {
                  official2.kontak = e.target.value;

                  this.setState({...official2});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!official2.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {official2.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={official2.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        official2.foto = e.target.result;

                        this.setState({
                          official2
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
                if (isOfficial2) {
                  this.setState({
                    isOfficial1: true,
                    isOfficial2: false
                  });
                } else {
                  history.push('/daftar/hsfc/1');
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain1.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain1.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain2.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain2.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain3.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain3.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain4.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain4.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain5.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain5.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
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

class Pemain6Sd10Form extends Component {
  state = {
    isPemain6: true,
    isPemain7: false,
    isPemain8: false,
    isPemain9: false,
    isPemain10: false,
    pemain6: {
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
    pemain7: {
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
    pemain8: {
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
    pemain9: {
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
    pemain10: {
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
      pemain6: {
        nama: sessionStorage.getItem('hsfc-register-pemain6-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain6-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain6-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain6-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain6-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain6-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain6-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain6-rapor') || ""
      },
      pemain7: {
        nama: sessionStorage.getItem('hsfc-register-pemain7-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain7-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain7-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain7-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain7-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain7-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain7-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain7-rapor') || ""
      },
      pemain8: {
        nama: sessionStorage.getItem('hsfc-register-pemain8-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain8-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain8-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain8-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain8-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain8-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain8-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain8-rapor') || ""
      },
      pemain9: {
        nama: sessionStorage.getItem('hsfc-register-pemain9-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain9-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain9-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain9-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain9-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain9-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain9-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain9-rapor') || ""
      },
      pemain10: {
        nama: sessionStorage.getItem('hsfc-register-pemain10-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain10-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain10-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain10-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain10-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain10-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain10-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain10-rapor') || ""
      },
    });
  }

  onSubmit(e) {
    let {
      isPemain6,
      isPemain7,
      isPemain8,
      isPemain9,
      isPemain10,
      pemain6,
      pemain7,
      pemain8,
      pemain9,
      pemain10
    } = this.state;
    let {history} = this.props;

    if (isPemain6) {
      sessionStorage.setItem('hsfc-register-pemain6-nama', pemain6.nama);
      sessionStorage.setItem('hsfc-register-pemain6-kontak', pemain6.kontak);
      sessionStorage.setItem('hsfc-register-pemain6-tempatLahir', pemain6.kelahiran.tempat);
      sessionStorage.setItem('hsfc-register-pemain6-tanggalLahir', pemain6.kelahiran.tanggal);
      sessionStorage.setItem('hsfc-register-pemain6-foto', pemain6.foto);
      sessionStorage.setItem('hsfc-register-pemain6-nomorPunggung', pemain6.nomorPunggung);
      sessionStorage.setItem('hsfc-register-pemain6-kartuPelajar', pemain6.kartuPelajar);
      localStorage.setItem('hsfc-register-pemain6-rapor', pemain6.rapor);

      this.setState({
        isPemain6: false,
        isPemain7: true,
        isPemain8: false,
        isPemain9: false,
        isPemain10: false
      });
    } else if (isPemain7) {
      sessionStorage.setItem('hsfc-register-pemain7-nama', pemain7.nama);
      sessionStorage.setItem('hsfc-register-pemain7-kontak', pemain7.kontak);
      sessionStorage.setItem('hsfc-register-pemain7-tempatLahir', pemain7.kelahiran.tempat);
      sessionStorage.setItem('hsfc-register-pemain7-tanggalLahir', pemain7.kelahiran.tanggal);
      sessionStorage.setItem('hsfc-register-pemain7-foto', pemain7.foto);
      sessionStorage.setItem('hsfc-register-pemain7-nomorPunggung', pemain7.nomorPunggung);
      sessionStorage.setItem('hsfc-register-pemain7-kartuPelajar', pemain7.kartuPelajar);
      localStorage.setItem('hsfc-register-pemain7-rapor', pemain7.rapor);

      this.setState({
        isPemain6: false,
        isPemain7: false,
        isPemain8: true,
        isPemain9: false,
        isPemain10: false
      });
    } else if (isPemain8) {
      sessionStorage.setItem('hsfc-register-pemain8-nama', pemain8.nama);
      sessionStorage.setItem('hsfc-register-pemain8-kontak', pemain8.kontak);
      sessionStorage.setItem('hsfc-register-pemain8-tempatLahir', pemain8.kelahiran.tempat);
      sessionStorage.setItem('hsfc-register-pemain8-tanggalLahir', pemain8.kelahiran.tanggal);
      sessionStorage.setItem('hsfc-register-pemain8-foto', pemain8.foto);
      sessionStorage.setItem('hsfc-register-pemain8-nomorPunggung', pemain8.nomorPunggung);
      sessionStorage.setItem('hsfc-register-pemain8-kartuPelajar', pemain8.kartuPelajar);
      localStorage.setItem('hsfc-register-pemain8-rapor', pemain8.rapor);

      this.setState({
        isPemain6: false,
        isPemain7: false,
        isPemain8: false,
        isPemain9: true,
        isPemain10: false
      });
    } else if (isPemain9) {
      sessionStorage.setItem('hsfc-register-pemain9-nama', pemain9.nama);
      sessionStorage.setItem('hsfc-register-pemain9-kontak', pemain9.kontak);
      sessionStorage.setItem('hsfc-register-pemain9-tempatLahir', pemain9.kelahiran.tempat);
      sessionStorage.setItem('hsfc-register-pemain9-tanggalLahir', pemain9.kelahiran.tanggal);
      sessionStorage.setItem('hsfc-register-pemain9-foto', pemain9.foto);
      sessionStorage.setItem('hsfc-register-pemain9-nomorPunggung', pemain9.nomorPunggung);
      sessionStorage.setItem('hsfc-register-pemain9-kartuPelajar', pemain9.kartuPelajar);
      localStorage.setItem('hsfc-register-pemain9-rapor', pemain9.rapor);

      this.setState({
        isPemain6: false,
        isPemain7: false,
        isPemain8: false,
        isPemain9: false,
        isPemain10: true
      });
    } else if (isPemain10) {
      sessionStorage.setItem('hsfc-register-pemain10-nama', pemain10.nama);
      sessionStorage.setItem('hsfc-register-pemain10-kontak', pemain10.kontak);
      sessionStorage.setItem('hsfc-register-pemain10-tempatLahir', pemain10.kelahiran.tempat);
      sessionStorage.setItem('hsfc-register-pemain10-tanggalLahir', pemain10.kelahiran.tanggal);
      sessionStorage.setItem('hsfc-register-pemain10-foto', pemain10.foto);
      sessionStorage.setItem('hsfc-register-pemain10-nomorPunggung', pemain10.nomorPunggung);
      sessionStorage.setItem('hsfc-register-pemain10-kartuPelajar', pemain10.kartuPelajar);
      localStorage.setItem('hsfc-register-pemain10-rapor', pemain10.rapor);

      history.push('/daftar/hsfc/finish');
    }

    e.preventDefault();
  }

  render() {
    let {
      isPemain6,
      isPemain7,
      isPemain8,
      isPemain9,
      isPemain10,
      pemain6,
      pemain7,
      pemain8,
      pemain9,
      pemain10
    } = this.state;
    let {history} = this.props;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="p-3 bg-white shadow rounded mb-1">
          <Col md="12">
            <p className="text-center mb-1 p-0">Pemain 6 s/d 10</p>
          </Col>
          <Col md={{size: 2, offset: 1}}>
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain6 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({
                isPemain6: true,
                isPemain7: false,
                isPemain8: false,
                isPemain9: false,
                isPemain10: false
              })}
            >Pemain 6</div>
          </Col>
          <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain7 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({
                isPemain6: false,
                isPemain7: true,
                isPemain8: false,
                isPemain9: false,
                isPemain10: false
              })}
            >Pemain 7</div>
          </Col>
          <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain8 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({
                isPemain6: false,
                isPemain7: false,
                isPemain8: true,
                isPemain9: false,
                isPemain10: false
              })}
            >Pemain 8</div>
          </Col>
          <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain9 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({
                isPemain6: false,
                isPemain7: false,
                isPemain8: false,
                isPemain9: true,
                isPemain10: false
              })}
            >Pemain 9</div>
          </Col>
          <Col md="2">
            <div className={"pointer p-1 shadow small text-center rounded " + (isPemain10 ? "bg-primary text-white":"bg-light")}
              onClick={() => this.setState({
                isPemain6: false,
                isPemain7: false,
                isPemain8: false,
                isPemain9: false,
                isPemain10: true
              })}
            >Pemain 10</div>
          </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain6}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={pemain6.nama}
                onChange={(e) => {
                  pemain6.nama = e.target.value;

                  this.setState({pemain6});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
              <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain6.kelahiran.tempat}
                  onChange={(e) => {
                    pemain6.kelahiran.tempat = e.target.value;

                    this.setState({pemain6});
                  }}
                />
                <Input type="date" size="sm" value={pemain6.kelahiran.tanggal}
                  onChange={(e) => {
                    pemain6.kelahiran.tanggal = e.target.value;

                    this.setState({pemain6});
                  }}
                />
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nomor Punggung</Label>
              <Input size="sm" value={pemain6.nomorPunggung}
                onChange={(e) => {
                  pemain6.nomorPunggung = e.target.value;

                  this.setState({pemain6});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak (wa/line)</Label>
              <Input size="sm" value={pemain6.kontak}
                onChange={(e) => {
                  pemain6.kontak = e.target.value;

                  this.setState({pemain6});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain6.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain6.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain6.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain6.foto = e.target.result;

                        this.setState({pemain6});
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
                {!pemain6.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain6.kartuPelajar
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain6.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain6.kartuPelajar = e.target.result;

                        this.setState({
                          pemain6
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain6.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain6.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
              </div>}
              <Input className="small" type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                      pemain6.rapor = e.target.result;

                      this.setState({pemain6});
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain7}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={pemain7.nama}
                onChange={(e) => {
                  pemain7.nama = e.target.value;

                  this.setState({pemain7});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
              <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain7.kelahiran.tempat}
                  onChange={(e) => {
                    pemain7.kelahiran.tempat = e.target.value;

                    this.setState({pemain7});
                  }}
                />
                <Input type="date" size="sm" value={pemain7.kelahiran.tanggal}
                  onChange={(e) => {
                    pemain7.kelahiran.tanggal = e.target.value;

                    this.setState({pemain7});
                  }}
                />
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nomor Punggung</Label>
              <Input size="sm" value={pemain7.nomorPunggung}
                onChange={(e) => {
                  pemain7.nomorPunggung = e.target.value;

                  this.setState({pemain7});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak (wa/line)</Label>
              <Input size="sm" value={pemain7.kontak}
                onChange={(e) => {
                  pemain7.kontak = e.target.value;

                  this.setState({pemain7});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain7.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain7.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain7.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain7.foto = e.target.result;

                        this.setState({
                          pemain7
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
                {!pemain7.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain7.kartuPelajar
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain7.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain7.kartuPelajar = e.target.result;

                        this.setState({
                          pemain7
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain7.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain7.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
              </div>}
              <Input className="small" type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                      pemain7.rapor = e.target.result;

                      this.setState({
                        pemain7
                      });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain8}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={pemain8.nama}
                onChange={(e) => {
                  pemain8.nama = e.target.value;

                  this.setState({pemain8});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
              <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain8.kelahiran.tempat}
                  onChange={(e) => {
                    pemain8.kelahiran.tempat = e.target.value;

                    this.setState({pemain8});
                  }}
                />
                <Input type="date" size="sm" value={pemain8.kelahiran.tanggal}
                  onChange={(e) => {
                    pemain8.kelahiran.tanggal = e.target.value;

                    this.setState({pemain8});
                  }}
                />
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nomor Punggung</Label>
              <Input size="sm" value={pemain8.nomorPunggung}
                onChange={(e) => {
                  pemain8.nomorPunggung = e.target.value;

                  this.setState({pemain8});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak (wa/line)</Label>
              <Input size="sm" value={pemain8.kontak}
                onChange={(e) => {
                  pemain8.kontak = e.target.value;

                  this.setState({pemain8});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain8.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain8.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain8.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain8.foto = e.target.result;

                        this.setState({
                          pemain8
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
                {!pemain8.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain8.kartuPelajar
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain8.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain8.kartuPelajar = e.target.result;

                        this.setState({
                          pemain8
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain8.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain8.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
              </div>}
              <Input className="small" type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                      pemain8.rapor = e.target.result;

                      this.setState({
                        pemain8
                      });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain9}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={pemain9.nama}
                onChange={(e) => {
                  pemain9.nama = e.target.value;

                  this.setState({pemain9});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
              <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain9.kelahiran.tempat}
                  onChange={(e) => {
                    pemain9.kelahiran.tempat = e.target.value;

                    this.setState({pemain9});
                  }}
                />
                <Input type="date" size="sm" value={pemain9.kelahiran.tanggal}
                  onChange={(e) => {
                    pemain9.kelahiran.tanggal = e.target.value;

                    this.setState({pemain9});
                  }}
                />
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nomor Punggung</Label>
              <Input size="sm" value={pemain9.nomorPunggung}
                onChange={(e) => {
                  pemain9.nomorPunggung = e.target.value;

                  this.setState({pemain9});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak (wa/line)</Label>
              <Input size="sm" value={pemain9.kontak}
                onChange={(e) => {
                  pemain9.kontak = e.target.value;

                  this.setState({pemain9});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain9.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain9.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain9.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain9.foto = e.target.result;

                        this.setState({
                          pemain9
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
                {!pemain9.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain9.kartuPelajar
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain9.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain9.kartuPelajar = e.target.result;

                        this.setState({
                          pemain9
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain9.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain9.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
              </div>}
              <Input className="small" type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                      pemain9.rapor = e.target.result;

                      this.setState({
                        pemain9
                      });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="p-3 bg-white shadow rounded mb-1" hidden={!isPemain10}>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" value={pemain10.nama}
                onChange={(e) => {
                  pemain10.nama = e.target.value;

                  this.setState({pemain10});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Tempat, Tanggal Lahir</Label>
              <div className="d-flex justify-content-between">
                <Input size="sm" value={pemain10.kelahiran.tempat}
                  onChange={(e) => {
                    pemain10.kelahiran.tempat = e.target.value;

                    this.setState({pemain10});
                  }}
                />
                <Input type="date" size="sm" value={pemain10.kelahiran.tanggal}
                  onChange={(e) => {
                    pemain10.kelahiran.tanggal = e.target.value;

                    this.setState({pemain10});
                  }}
                />
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nomor Punggung</Label>
              <Input size="sm" value={pemain10.nomorPunggung}
                onChange={(e) => {
                  pemain10.nomorPunggung = e.target.value;

                  this.setState({pemain10});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak (wa/line)</Label>
              <Input size="sm" value={pemain10.kontak}
                onChange={(e) => {
                  pemain10.kontak = e.target.value;

                  this.setState({pemain10});
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain10.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain10.foto
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain10.foto} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain10.foto = e.target.result;

                        this.setState({
                          pemain10
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
                {!pemain10.kartuPelajar
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain10.kartuPelajar
                && <div className="mb-1">
                  <img alt="Gambar Gagal Dimuat" src={pemain10.kartuPelajar} className="img-fluid"/>
                </div>}
                <Input type="file" className="small"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();

                      reader.onload = (e) => {
                        pemain10.kartuPelajar = e.target.result;

                        this.setState({
                          pemain10
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
              <Label className="small text-uppercase">Scan Rapor</Label>
              {pemain10.rapor
              && <div className="mb-1 rounded p-1 bg-success text-white small text-center">
                File telah di unggah
              </div>}
              {!pemain10.rapor
              && <div className="mb-1 rounded p-1 bg-warning small text-center">
                Silahkan Upload File PDF
              </div>}
              <Input className="small" type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => {
                      pemain10.rapor = e.target.result;

                      this.setState({
                        pemain10
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
                if (isPemain7) {
                  this.setState({
                    isPemain6: true,
                    isPemain7: false,
                    isPemain8: false,
                    isPemain9: false,
                    isPemain10: false
                  });
                } else if (isPemain8) {
                  this.setState({
                    isPemain6: false,
                    isPemain7: true,
                    isPemain8: false,
                    isPemain9: false,
                    isPemain10: false
                  });
                } else if (isPemain9) {
                  this.setState({
                    isPemain6: false,
                    isPemain7: false,
                    isPemain8: true,
                    isPemain9: false,
                    isPemain10: false
                  });
                } else if (isPemain10) {
                  this.setState({
                    isPemain6: false,
                    isPemain7: false,
                    isPemain8: false,
                    isPemain9: true,
                    isPemain10: false
                  });
                } else {
                  history.push('/daftar/hsfc/3');
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

class Finish extends Component {
  state = {
    isLoading: false
  };

  onSubmit(e) {
    let {history} = this.props;

    this.setState({
      isLoading: true
    });

    let key = database.ref().child('pesertaHsfc').push().key;

    database.ref('pesertaHsfc/' + key).set({
      namaSekolah: sessionStorage.getItem('hsfc-register-infoDasar-namaSekolah') || "",
      kota: sessionStorage.getItem('hsfc-register-infoDasar-kota') || "",
      kontak: sessionStorage.getItem('hsfc-register-infoDasar-kontak') || "",
      official1: {
        nama: sessionStorage.getItem('hsfc-register-official1-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-official1-kontak') || "",
        foto: sessionStorage.getItem('hsfc-register-official1-foto') || ""
      },
      official2: {
        nama: sessionStorage.getItem('hsfc-register-official2-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-official2-kontak') || "",
        foto: sessionStorage.getItem('hsfc-register-official2-foto') || ""
      },
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
      pemain6: {
        nama: sessionStorage.getItem('hsfc-register-pemain6-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain6-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain6-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain6-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain6-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain6-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain6-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain6-rapor') || ""
      },
      pemain7: {
        nama: sessionStorage.getItem('hsfc-register-pemain7-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain7-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain7-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain7-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain7-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain7-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain7-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain7-rapor') || ""
      },
      pemain8: {
        nama: sessionStorage.getItem('hsfc-register-pemain8-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain8-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain8-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain8-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain8-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain8-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain8-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain8-rapor') || ""
      },
      pemain9: {
        nama: sessionStorage.getItem('hsfc-register-pemain9-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain9-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain9-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain9-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain9-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain9-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain9-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain9-rapor') || ""
      },
      pemain10: {
        nama: sessionStorage.getItem('hsfc-register-pemain10-nama') || "",
        kontak: sessionStorage.getItem('hsfc-register-pemain10-kontak') || "",
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain10-tempatLahir') || "",
          tanggal: sessionStorage.getItem('hsfc-register-pemain10-tanggalLahir') || ""
        },
        foto: sessionStorage.getItem('hsfc-register-pemain10-foto') || "",
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain10-nomorPunggung') || "",
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain10-kartuPelajar') || "",
        rapor: localStorage.getItem('hsfc-register-pemain10-rapor') || ""
      }
    })
    .then(() => {
      this.setState({
        isLoading: false
      });

      sessionStorage.clear();
      localStorage.clear();

      swal("Selamat anda telah terdaftar").then(() => history.push('/'));
    });

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {isLoading} = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="p-3 bg-white rounded shadow mb-1">
          <Col>
            <p className="m-0 p-0 text-uppercase text-center">Konfirmasi Pendaftaran</p>
          </Col>
        </Row>

        <Row className="p-3 bg-white rounded shadow mb-1">
          <Col>
            <p className="m-0 p-0 small text-center">
              Dengan klik tombol konfirmasi maka anda menyetujui
              segala ketentuan yang ada, dan pastikan semua data yang dimasukkan telah benar.</p>
          </Col>
        </Row>

        <Row className="p-3 bg-white rounded shadow">
          <Col>
            <Button className="shadow" color="light" block
              onClick={() => history.push('/daftar/hsfc/4')}
            >Kembali</Button>
          </Col>
          <Col>
            <Button className="shadow" color="primary" disabled={isLoading} block>
              {isLoading
              && <ReactLoading type="spin" height={24} width={24} color="white" className="mx-auto"/>}
              {!isLoading
              && 'Konfirmasi'}
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default withRouter(HsfcRegisterPage);
