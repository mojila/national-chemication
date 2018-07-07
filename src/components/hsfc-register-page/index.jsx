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
import {Document, Page} from 'react-pdf';

import bg from './../../statics/images/hsfc.jpeg';
import jersey from './../../statics/images/jersey.jpg';

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
        <Animated isVisible animationIn="fadeIn">
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
      namaSekolah: sessionStorage.getItem('hsfc-register-infoDasar-namaSekolah') || null,
      kota: sessionStorage.getItem('hsfc-register-infoDasar-kota') || null,
      kontak: sessionStorage.getItem('hsfc-register-infoDasar-kontak') || null
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
        nama: sessionStorage.getItem('hsfc-register-official1-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-official1-kontak') || null,
        foto: sessionStorage.getItem('hsfc-register-official1-foto') || null
      },
      official2: {
        nama: sessionStorage.getItem('hsfc-register-official2-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-official2-kontak') || null,
        foto: sessionStorage.getItem('hsfc-register-official2-foto') || null
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
                  <img src={official1.foto} className="img-fluid"/>
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
                  <img src={official2.foto} className="img-fluid"/>
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
        nama: sessionStorage.getItem('hsfc-register-pemain1-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-pemain1-kontak') || null,
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain1-tempatLahir') || null,
          tanggal: sessionStorage.getItem('hsfc-register-pemain1-tanggalLahir') || null
        },
        foto: sessionStorage.getItem('hsfc-register-pemain1-foto') || null,
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain1-nomorPunggung') || null,
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain1-kartuPelajar') || null,
        rapor: sessionStorage.getItem('hsfc-register-pemain1-rapor') || null
      },
      pemain2: {
        nama: sessionStorage.getItem('hsfc-register-pemain2-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-pemain2-kontak') || null,
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain2-tempatLahir') || null,
          tanggal: sessionStorage.getItem('hsfc-register-pemain2-tanggalLahir') || null
        },
        foto: sessionStorage.getItem('hsfc-register-pemain2-foto') || null,
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain2-nomorPunggung') || null,
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain2-kartuPelajar') || null,
        rapor: sessionStorage.getItem('hsfc-register-pemain2-rapor') || null
      },
      pemain3: {
        nama: sessionStorage.getItem('hsfc-register-pemain3-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-pemain3-kontak') || null,
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain3-tempatLahir') || null,
          tanggal: sessionStorage.getItem('hsfc-register-pemain3-tanggalLahir') || null
        },
        foto: sessionStorage.getItem('hsfc-register-pemain3-foto') || null,
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain3-nomorPunggung') || null,
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain3-kartuPelajar') || null,
        rapor: sessionStorage.getItem('hsfc-register-pemain3-rapor') || null
      },
      pemain4: {
        nama: sessionStorage.getItem('hsfc-register-pemain4-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-pemain4-kontak') || null,
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain4-tempatLahir') || null,
          tanggal: sessionStorage.getItem('hsfc-register-pemain4-tanggalLahir') || null
        },
        foto: sessionStorage.getItem('hsfc-register-pemain4-foto') || null,
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain4-nomorPunggung') || null,
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain4-kartuPelajar') || null,
        rapor: sessionStorage.getItem('hsfc-register-pemain4-rapor') || null
      },
      pemain5: {
        nama: sessionStorage.getItem('hsfc-register-pemain5-nama') || null,
        kontak: sessionStorage.getItem('hsfc-register-pemain5-kontak') || null,
        kelahiran: {
          tempat: sessionStorage.getItem('hsfc-register-pemain5-tempatLahir') || null,
          tanggal: sessionStorage.getItem('hsfc-register-pemain5-tanggalLahir') || null
        },
        foto: sessionStorage.getItem('hsfc-register-pemain5-foto') || null,
        nomorPunggung: sessionStorage.getItem('hsfc-register-pemain5-nomorPunggung') || null,
        kartuPelajar: sessionStorage.getItem('hsfc-register-pemain5-kartuPelajar') || null,
        rapor: sessionStorage.getItem('hsfc-register-pemain5-rapor') || null
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
      sessionStorage.setItem('hsfc-register-pemain1-rapor', pemain1.rapor);

      this.setState({
        isPemain1: false,
        isPemain2: true,
        isPemain3: false,
        isPemain4: false,
        isPemain5: false
      });
    } else if (isPemain2) {
      this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: true,
        isPemain4: false,
        isPemain5: false
      });
    } else if (isPemain3) {
      this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: false,
        isPemain4: true,
        isPemain5: false
      });
    } else if (isPemain4) {
      this.setState({
        isPemain1: false,
        isPemain2: false,
        isPemain3: false,
        isPemain4: false,
        isPemain5: true
      });
    } else if (isPemain5) {
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
              <Label className="small text-uppercase">Foto 3x4</Label>
                {!pemain1.foto
                && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                  Silahkan Pilih Foto
                </div>}
                {pemain1.foto
                && <div className="mb-1">
                  <img src={pemain1.foto} className="img-fluid"/>
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
                  <img src={pemain1.kartuPelajar} className="img-fluid"/>
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
              && <Document file={pemain1.rapor}>
                <Page pageNumber={1}/>
              </Document>}
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

export default withRouter(HsfcRegisterPage);
