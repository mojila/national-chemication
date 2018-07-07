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
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

import bg from './../../statics/images/essay.jpg';
import {database} from './../../firebase/firebase';

class EcRegisterPage extends Component {
  componentDidMount() {
      document.title = "Pendaftaran Peserta EC";
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
                      Dosen Pembimbing
                  </div>
              </Col>
              <Col>
                  <div className="small text-capitalize text-center text-white">
                      Identitas diri ketua
                  </div>
              </Col>
              <Col>
                  <div className="small text-capitalize text-center text-white">
                      Identitas Anggota 1
                  </div>
              </Col>
              <Col>
                  <div className="small text-capitalize text-center text-white">
                      identitas anggota 2
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
              <Col>
                  <Progress
                      value={Number(match.params.step) > 4  ? 5:0}
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
            <Col md={{size: 6, offset: 3}}>
              {Number(match.params.step) === 1
              && <InfoDasarForm history={history}/>}
              {Number(match.params.step) === 2
              && <DosenPembimbingForm history={history}/>}
              {Number(match.params.step) === 3
              && <KetuaForm history={history}/>}
              {Number(match.params.step) === 4
              && <Anggota1Form history={history}/>}
              {Number(match.params.step) === 5
              && <Anggota2Form history={history}/>}
              {match.params.step === "finish"
              && <Finish history={history}/>}
            </Col>
          </Row>
        </Animated>
      </Container>
    );
  }
}

const sessionSet = (propertyName, value) => {
  sessionStorage.setItem(propertyName, value);
};

const sessionGet = (propertyName) => sessionStorage.getItem(propertyName);

class InfoDasarForm extends Component {
  state = {
      judulKarya: '',
      namaInstitusiPendidikan: '',
      telpOrFaxInstitusiPendidikan: '',
      emailInstitusiPendidikan: '',
      alamatInstitusiPendidikan: ''
  };

  componentDidMount() {
    this.setState({
      judulKarya: sessionGet('ec-register-infoDasar-judulKarya') || "",
      namaInstitusiPendidikan: sessionGet('ec-register-infoDasar-namaInstitusiPendidikan') || "",
      telpOrFaxInstitusiPendidikan: sessionGet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan') || "",
      emailInstitusiPendidikan: sessionGet('ec-register-infoDasar-emailInstitusiPendidikan') || "",
      alamatInstitusiPendidikan: sessionGet('ec-register-infoDasar-alamatInstitusiPendidikan') || ""
    });
  }

  onSubmit(e) {
    let {
      judulKarya,
      namaInstitusiPendidikan,
      telpOrFaxInstitusiPendidikan,
      emailInstitusiPendidikan,
      alamatInstitusiPendidikan
    } = this.state;
    let {
      history
    } = this.props;

    sessionSet('ec-register-infoDasar-judulKarya', judulKarya);
    sessionSet('ec-register-infoDasar-namaInstitusiPendidikan', namaInstitusiPendidikan);
    sessionSet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan', telpOrFaxInstitusiPendidikan);
    sessionSet('ec-register-infoDasar-emailInstitusiPendidikan', emailInstitusiPendidikan);
    sessionSet('ec-register-infoDasar-alamatInstitusiPendidikan', alamatInstitusiPendidikan);

    history.push('/daftar/ec/2');

    e.preventDefault();
  }

  render() {
    let {
      judulKarya,
      namaInstitusiPendidikan,
      telpOrFaxInstitusiPendidikan,
      emailInstitusiPendidikan,
      alamatInstitusiPendidikan
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <Button size="sm" className="shadow" color="light"
            tag={Link} to="/">Beranda</Button>
          </Col>
          <Col>
            <p className="p-0 m-0 text-right text-uppercase">Info Dasar</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Judul Karya
                </Label>
                <Input size="sm" placeholder="Masukkan judul karya"
                  value={judulKarya}
                  onChange={(e) => this.setState({judulKarya: e.target.value})}
                />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Nama Institusi Pendidikan
                </Label>
                <Input size="sm" placeholder="Masukkan judul karya"
                  value={namaInstitusiPendidikan}
                  onChange={(e) => this.setState({namaInstitusiPendidikan: e.target.value})}
                />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
                <Label className="small text-uppercase">
                    Telp Institusi Pendidikan
                </Label>
                <Input
                    size="sm"
                    placeholder="Masukkan Telp/Fax Institusi Pendidikan"
                    value={telpOrFaxInstitusiPendidikan}
                    onChange={(e) => this.setState({telpOrFaxInstitusiPendidikan: e.target.value})}
                />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
                <Label
                    className="small text-uppercase"
                >
                    Email Institusi Pendidikan
                </Label>
                <Input
                    size="sm"
                    type="email"
                    placeholder="Masukkan Email Institusi Pendidikan"
                    value={emailInstitusiPendidikan}
                    onChange={(e) => this.setState({emailInstitusiPendidikan: e.target.value})}
                />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
                <Label
                    className="small text-uppercase"
                >
                    Alamat Institusi
                </Label>
                <textarea className="form-control"
                  onChange={(e) => this.setState({alamatInstitusiPendidikan: e.target.value})}
                  placeholder="Masukkan Alamat Institusi Pendidikan"
                  value={alamatInstitusiPendidikan}
                ></textarea>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md={{size: 6, offset: 6}}>
            <Button color="primary" block>Selanjutnya</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

class DosenPembimbingForm extends Component {
  state = {
    nama: '',
    nip: '',
    kontak: '',
    email: '',
    foto: ''
  };

  componentDidMount() {
    this.setState({
      nama: sessionGet('ec-register-dosenPembimbing-nama') || "",
      nip: sessionGet('ec-register-dosenPembimbing-nip') || "",
      kontak: sessionGet('ec-register-dosenPembimbing-kontak') || "",
      email: sessionGet('ec-register-dosenPembimbing-email') || "",
      foto: sessionGet('ec-register-dosenPembimbing-foto') || ""
    });
  }

  onSubmit(e) {
    let {
      nama,
      nip,
      kontak,
      email,
      foto
    } = this.state;
    let {
      history
    } = this.props;

    sessionSet('ec-register-dosenPembimbing-nama', nama);
    sessionSet('ec-register-dosenPembimbing-nip', nip);
    sessionSet('ec-register-dosenPembimbing-kontak', kontak);
    sessionSet('ec-register-dosenPembimbing-email', email);
    sessionSet('ec-register-dosenPembimbing-foto', foto);

    history.push('/daftar/ec/3');

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      nama,
      nip,
      kontak,
      email,
      foto
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 text-center text-uppercase">Dosen Pembimbing</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama Dosen</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => this.setState({nama: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">nip</Label>
              <Input size="sm" placeholder="Masukkan NIP"
                value={nip}
                onChange={(e) => this.setState({nip: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak No. HP/WA/Line</Label>
              <Input size="sm" placeholder="Masukkan Kontak"
                value={kontak}
                onChange={(e) => this.setState({kontak: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Email</Label>
              <Input size="sm" type="email" placeholder="Masukkan Kontak"
                value={email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
              {!foto
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Pilih Foto
              </div>}
              {foto
              && <div>
                <img alt="Gambar Gagal Dimuat" src={foto} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      foto: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col md="6">
            <Button className="shadow" color="light" block
              onClick={(e) => history.push('/daftar/ec/1')}
            >Sebelumnya</Button>
          </Col>
          <Col md="6">
            <Button className="primary" color="primary" block>Selanjutnya</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

class KetuaForm extends Component {
  state = {
    nama: '',
    nim: '',
    jurusan: '',
    semester: '',
    kontak: '',
    email: '',
    foto: '',
    ktm: ''
  };

  componentDidMount() {
    this.setState({
      nama: sessionGet('ec-register-ketua-nama') || "",
      nim: sessionGet('ec-register-ketua-nim') || "",
      jurusan: sessionGet('ec-register-ketua-jurusan') || "",
      semester: sessionGet('ec-register-ketua-semester') || "",
      kontak: sessionGet('ec-register-ketua-kontak') || "",
      email: sessionGet('ec-register-ketua-email') || "",
      foto: sessionGet('ec-register-ketua-foto') || "",
      ktm: sessionGet('ec-register-ketua-ktm') || ""
    });
  }

  onSubmit(e) {
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;
    let {
      history
    } = this.props;

    sessionSet('ec-register-ketua-nama', nama);
    sessionSet('ec-register-ketua-nim', nim);
    sessionSet('ec-register-ketua-jurusan', jurusan);
    sessionSet('ec-register-ketua-semester', semester);
    sessionSet('ec-register-ketua-kontak', kontak);
    sessionSet('ec-register-ketua-email', email);
    sessionSet('ec-register-ketua-foto', foto);
    sessionSet('ec-register-ketua-ktm', ktm);

    history.push('/daftar/ec/4');

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 text-center text-uppercase">Ketua</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => this.setState({nama: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">nim</Label>
              <Input size="sm" placeholder="Masukkan NIM"
                value={nim}
                onChange={(e) => this.setState({nim: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Jurusan/Fakultas</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={jurusan}
                onChange={(e) => this.setState({jurusan: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Semester</Label>
              <Input size="sm" placeholder="Masukkan Semester"
                value={semester}
                onChange={(e) => this.setState({semester: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak No. HP/WA/Line</Label>
              <Input size="sm" placeholder="Masukkan Kontak"
                value={kontak}
                onChange={(e) => this.setState({kontak: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Email</Label>
              <Input size="sm" type="email" placeholder="Masukkan Kontak"
                value={email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
              {!foto
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Pilih Foto
              </div>}
              {foto
              && <div>
                <img alt="Gambar Gagal Dimuat" src={foto} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      foto: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">KTM / Surat Keterangan</Label>
              {!ktm
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Upload KTM
              </div>}
              {ktm
              && <div>
                <img alt="Gambar Gagal Dimuat" src={ktm} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      ktm: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col md="6">
            <Button className="shadow" color="light" block
              onClick={(e) => history.push('/daftar/ec/2')}
            >Sebelumnya</Button>
          </Col>
          <Col md="6">
            <Button className="primary" color="primary" block>Selanjutnya</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

class Anggota1Form extends Component {
  state = {
    nama: '',
    nim: '',
    jurusan: '',
    semester: '',
    kontak: '',
    email: '',
    foto: '',
    ktm: ''
  };

  componentDidMount() {
    this.setState({
      nama: sessionGet('ec-register-anggota1-nama') || "",
      nim: sessionGet('ec-register-anggota1-nim') || "",
      jurusan: sessionGet('ec-register-anggota1-jurusan') || "",
      semester: sessionGet('ec-register-anggota1-semester') || "",
      kontak: sessionGet('ec-register-anggota1-kontak') || "",
      email: sessionGet('ec-register-anggota1-email') || "",
      foto: sessionGet('ec-register-anggota1-foto') || "",
      ktm: sessionGet('ec-register-anggota1-ktm') || ""
    });
  }

  onSubmit(e) {
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;
    let {
      history
    } = this.props;

    sessionSet('ec-register-anggota1-nama', nama);
    sessionSet('ec-register-anggota1-nim', nim);
    sessionSet('ec-register-anggota1-jurusan', jurusan);
    sessionSet('ec-register-anggota1-semester', semester);
    sessionSet('ec-register-anggota1-kontak', kontak);
    sessionSet('ec-register-anggota1-email', email);
    sessionSet('ec-register-anggota1-foto', foto);
    sessionSet('ec-register-anggota1-ktm', ktm);

    history.push('/daftar/ec/5');

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 text-center text-uppercase">Anggota 1</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => this.setState({nama: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">nim</Label>
              <Input size="sm" placeholder="Masukkan NIM"
                value={nim}
                onChange={(e) => this.setState({nim: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Jurusan/Fakultas</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={jurusan}
                onChange={(e) => this.setState({jurusan: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Semester</Label>
              <Input size="sm" placeholder="Masukkan Semester"
                value={semester}
                onChange={(e) => this.setState({semester: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak No. HP/WA/Line</Label>
              <Input size="sm" placeholder="Masukkan Kontak"
                value={kontak}
                onChange={(e) => this.setState({kontak: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Email</Label>
              <Input size="sm" type="email" placeholder="Masukkan Kontak"
                value={email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
              {!foto
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Pilih Foto
              </div>}
              {foto
              && <div>
                <img alt="Gambar Gagal Dimuat" src={foto} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      foto: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">KTM / Surat Keterangan</Label>
              {!ktm
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Upload KTM
              </div>}
              {ktm
              && <div>
                <img alt="Gambar Gagal Dimuat" src={ktm} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      ktm: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col md="6">
            <Button className="shadow" color="light" block
              onClick={(e) => history.push('/daftar/ec/3')}
            >Sebelumnya</Button>
          </Col>
          <Col md="6">
            <Button className="primary" color="primary" block>Selanjutnya</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

class Anggota2Form extends Component {
  state = {
    nama: '',
    nim: '',
    jurusan: '',
    semester: '',
    kontak: '',
    email: '',
    foto: '',
    ktm: ''
  };

  componentDidMount() {
    this.setState({
      nama: sessionGet('ec-register-anggota2-nama') || "",
      nim: sessionGet('ec-register-anggota2-nim') || "",
      jurusan: sessionGet('ec-register-anggota2-jurusan') || "",
      semester: sessionGet('ec-register-anggota2-semester') || "",
      kontak: sessionGet('ec-register-anggota2-kontak') || "",
      email: sessionGet('ec-register-anggota2-email') || "",
      foto: sessionGet('ec-register-anggota2-foto') || "",
      ktm: sessionGet('ec-register-anggota2-ktm') || ""
    });
  }

  onSubmit(e) {
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;
    let {
      history
    } = this.props;

    sessionSet('ec-register-anggota2-nama', nama);
    sessionSet('ec-register-anggota2-nim', nim);
    sessionSet('ec-register-anggota2-jurusan', jurusan);
    sessionSet('ec-register-anggota2-semester', semester);
    sessionSet('ec-register-anggota2-kontak', kontak);
    sessionSet('ec-register-anggota2-email', email);
    sessionSet('ec-register-anggota2-foto', foto);
    sessionSet('ec-register-anggota2-ktm', ktm);

    history.push('/daftar/ec/finish');

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      nama,
      nim,
      jurusan,
      semester,
      kontak,
      email,
      foto,
      ktm
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 text-center text-uppercase">Anggota 2</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Nama</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={nama}
                onChange={(e) => this.setState({nama: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">nim</Label>
              <Input size="sm" placeholder="Masukkan NIM"
                value={nim}
                onChange={(e) => this.setState({nim: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Jurusan/Fakultas</Label>
              <Input size="sm" placeholder="Masukkan Nama"
                value={jurusan}
                onChange={(e) => this.setState({jurusan: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Semester</Label>
              <Input size="sm" placeholder="Masukkan Semester"
                value={semester}
                onChange={(e) => this.setState({semester: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Kontak No. HP/WA/Line</Label>
              <Input size="sm" placeholder="Masukkan Kontak"
                value={kontak}
                onChange={(e) => this.setState({kontak: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Email</Label>
              <Input size="sm" type="email" placeholder="Masukkan Kontak"
                value={email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">Foto 3x4</Label>
              {!foto
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Pilih Foto
              </div>}
              {foto
              && <div>
                <img alt="Gambar Gagal Dimuat" src={foto} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      foto: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label className="small text-uppercase">KTM / Surat Keterangan</Label>
              {!ktm
              && <div className="p-2 bg-secondary mb-1 text-white rounded small text-center">
                Silahkan Upload KTM
              </div>}
              {ktm
              && <div>
                <img alt="Gambar Gagal Dimuat" src={ktm} className="img-fluid"/>
              </div>}
              <Input type="file" className="small"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();

                    reader.onload = (e) => this.setState({
                      ktm: e.target.result
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col md="6">
            <Button className="shadow" color="light" block
              onClick={(e) => history.push('/daftar/ec/4')}
            >Sebelumnya</Button>
          </Col>
          <Col md="6">
            <Button className="primary" color="primary" block>Selesai Mendaftar</Button>
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

    let key = database.ref().child('pesertaEc').push().key;

    database.ref('pesertaEc/' + key).set({
      infoDasar: {
        judulKarya: sessionGet('ec-register-infoDasar-judulKarya') || "",
        namaInstitusiPendidikan: sessionGet('ec-register-infoDasar-namaInstitusiPendidikan') || "",
        telpOrFaxInstitusiPendidikan: sessionGet('ec-register-infoDasar-telpOrFaxInstitusiPendidikan') || "",
        emailInstitusiPendidikan: sessionGet('ec-register-infoDasar-emailInstitusiPendidikan') || "",
        alamatInstitusiPendidikan: sessionGet('ec-register-infoDasar-alamatInstitusiPendidikan') || ""
      },
      dosenPembimbing: {
        nama: sessionGet('ec-register-dosenPembimbing-nama') || "",
        nip: sessionGet('ec-register-dosenPembimbing-nip') || "",
        email: sessionGet('ec-register-dosenPembimbing-email') || "",
        kontak: sessionGet('ec-register-dosenPembimbing-kontak') || "",
        foto: sessionGet('ec-register-dosenPembimbing-foto') || ""
      },
      ketua: {
        nama: sessionGet('ec-register-ketua-nama') || "",
        nim: sessionGet('ec-register-ketua-nama') || "",
        email: sessionGet('ec-register-ketua-email') || "",
        kontak: sessionGet('ec-register-ketua-kontak') || "",
        jurusan: sessionGet('ec-register-ketua-jurusan') || "",
        semester: sessionGet('ec-register-ketua-semester') || "",
        foto: sessionGet('ec-register-ketua-foto') || "",
        ktm: sessionGet('ec-register-ketua-ktm') || ""
      },
      anggota1: {
        nama: sessionGet('ec-register-anggota1-nama') || "",
        nim: sessionGet('ec-register-anggota1-nama') || "",
        email: sessionGet('ec-register-anggota1-email') || "",
        kontak: sessionGet('ec-register-anggota1-kontak') || "",
        jurusan: sessionGet('ec-register-anggota1-jurusan') || "",
        semester: sessionGet('ec-register-anggota1-semester') || "",
        foto: sessionGet('ec-register-anggota1-foto') || "",
        ktm: sessionGet('ec-register-anggota1-ktm') || ""
      },
      anggota2: {
        nama: sessionGet('ec-register-anggota2-nama') || "",
        nim: sessionGet('ec-register-anggota2-nama') || "",
        email: sessionGet('ec-register-anggota2-email') || "",
        kontak: sessionGet('ec-register-anggota2-kontak') || "",
        jurusan: sessionGet('ec-register-anggota2-jurusan') || "",
        semester: sessionGet('ec-register-anggota2-semester') || "",
        foto: sessionGet('ec-register-anggota2-foto') || "",
        ktm: sessionGet('ec-register-anggota2-ktm') || ""
      }
    })
    .then(() => {
      this.setState({
        isLoading: false
      });

      sessionStorage.clear();

      swal("Selamat, Pendaftaran Telah Berhasil!")
      .then(() => history.push('/'));
    });

    e.preventDefault();
  }

  render() {
    let {isLoading} = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 text-center text-uppercase">Konfirmasi Pendaftaran</p>
          </Col>
        </Row>
        <Row className="mb-1 p-3 bg-white shadow rounded">
          <Col>
            <p className="p-0 m-0 small text-center">
              Klik Konfirmasi bila telah yakin semua data yang sudah
              dimasukkan telah benar.
            </p>
          </Col>
        </Row>
        <Row className="p-3 bg-white shadow rounded">
          <Col>
            <Button block color="light" className="shadow"
              onClick={() => this.props.history.push('/daftar/ec/5')}
            >Kembali</Button>
          </Col>
          <Col>
            <Button block color="primary" className="shadow">
              {isLoading
              && <ReactLoading type="spin" color="white" height={24} width={24} className="mx-auto"/>}
              {!isLoading
              && 'Konfirmasi'}
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default withRouter(EcRegisterPage);
