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

import bg from './../../statics/images/essay.jpg';

import {Consumer} from '../../context/context';

class EcRegisterPage extends Component {
    componentDidMount() {
        document.title = "Pendaftaran Peserta EC";
        document.body.style.background = "url('"+bg+"')";
        document.body.style.backgroundSize = "cover";
    }

    render() {
        let {match} = this.props;

        return <Container
            className="mt-md-4"
        >
            <Animated
                isVisible
                animationIn="fadeIn"
            >
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
            </Animated>
            <Animated
                animationIn="flipInY"
                animationOut="flipOutY"
                isVisible
            >
                <Row className="mt-4">
                    <Col
                        md={{
                            size:6,
                            offset:3
                        }}
                    >
                        {match.params.step
                            ? <RegisterForm step={match.params.step} />
                            : ''
                        }
                    </Col>
                </Row>
            </Animated>
        </Container>;
    }
}

const INITIAL_STATE = {
    error: null
};

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {...INITIAL_STATE};
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {step} = this.props;
        let steps = [
            'zero',
            'info dasar',
            'dosen pembimbing',
            'identitas diri ketua',
            'identitas anggota 1',
            'identitas anggota 2'
        ];
        let {error} = this.state;
        let isInfoDasar = Number(step) === 1;
        let isDosenPembimbing = Number(step) === 2;
        let isIdentitasDiriKetua = Number(step) === 3;
        let isIdentitasDiriAnggota1 = Number(step) === 4;
        let isIdentitasDiriAnggota2 = Number(step) === 5;

        return <Form
            onSubmit={this.onSubmit}
            encType="multipart/form-data"
        >
            <Row
                className="mb-1 p-3 bg-white shadow rounded"
            >
                <Col>
                    {step === '1'
                    && <Button 
                        size="sm" 
                        color="light" 
                        className="shadow"
                        tag={Link}
                        to="/daftar"
                    >
                        Beranda
                    </Button>}
                </Col>
                <Col>
                    <div 
                        className="small text-right text-capitalize"
                    >
                        Step {step}: {steps[step]}
                    </div>
                </Col>
            </Row>
            {
                isInfoDasar
                && <InfoDasarForm/>
            }
            {
                isDosenPembimbing
                && <DosenPembimbingForm/>
            }
            {
                isIdentitasDiriKetua
                && <IdentitasDiriKetuaForm/>
            }
            {
                isIdentitasDiriAnggota1
                && <IdentitasDiriAnggota1Form/>
            }
            {
                isIdentitasDiriAnggota2
                && <IdentitasDiriAnggota2Form/>
            }
            <Row
                className="p-3 mb-4 bg-white shadow rounded"
            >
                <Col>
                    {
                        Number(step) > 1
                        && <Button
                            color="light"
                            className="shadow"
                            size="sm"
                            tag={Link}
                            to={`/daftar/ec/${Number(step)-1}`}
                        >
                            Kembali
                        </Button>
                    }
                </Col>
                <Col>
                    {
                        Number(step) < 5
                        && <Button
                            color="primary"
                            className="shadow float-right"
                            size="sm"
                            tag={Link}
                            to={`/daftar/ec/${Number(step)+1}`}
                            >
                                Selanjutnya
                            </Button>
                    }
                    {
                        Number(step) === 5
                        && <Button
                            color="primary"
                            className="shadow float-right"
                            size="sm"
                            >
                                Selesai
                            </Button>
                    }
                </Col>
            </Row>
            {
                error
                && <Animated
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        isVisible
                    >
                        <Row
                            className="p-3 bg-danger shadow rounded"
                        >
                            <Col>
                                <div className="text-white">Error</div>
                            </Col>
                        </Row>
                    </Animated>
            }
        </Form>;
    }
}

class InfoDasarForm extends Component {
    render() {
        return <Consumer>
            {({ecRegister}) => 
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label 
                                className="small text-capitalize"
                            >
                                Judul Karya
                            </Label>
                            <Input 
                                size="sm" 
                                placeholder="Masukkan judul karya"
                                value={ecRegister.judulKarya}
                                onChange={ecRegister.onJudulKaryaChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label 
                                className="small text-capitalize"
                            >
                                Nama Institusi Pendidikan
                            </Label>
                            <Input 
                                size="sm" 
                                placeholder="Masukkan nama institusi"
                                value={ecRegister.namaInstitusiPendidikan}
                                onChange={ecRegister.onNamaInstitusiPendidikan}
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label 
                                className="small text-capitalize"
                            >
                                Telp/Fax Institusi Pendidikan
                            </Label>
                            <Input 
                                size="sm" 
                                placeholder="Masukkan Telp/Fax Institusi Pendidikan"
                                value={ecRegister.telpOrFaxInstitusiPendidikan}
                                onChange={ecRegister.onTelpOrFaxInstitusiPendidikan}
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label 
                                className="small text-capitalize"
                            >
                                Email Institusi Pendidikan
                            </Label>
                            <Input 
                                size="sm"
                                type="email" 
                                placeholder="Masukkan Email Institusi Pendidikan"
                                value={ecRegister.emailInstitusiPendidikan}
                                onChange={ecRegister.onEmailInstitusiPendidikan}
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:12,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label 
                                className="small text-capitalize"
                            >
                                Alamat Institusi Pendidikan
                            </Label>
                            <textarea
                                className="form-control small"
                                onChange={ecRegister.onAlamatInstitusiPendidikan}
                                placeholder="Masukkan alamat Institusi Pendidikan"
                            >{ecRegister.alamatInstitusiPendidikan}</textarea>
                        </FormGroup>
                    </Col>
                </Row>
            }
        </Consumer>;
    }
}

class DosenPembimbingForm extends Component {
    render() {
        return <Consumer>
            {({ecRegister}) =>
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Nama
                            </Label>
                            <Input 
                                placeholder="Masukkan Nama"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                NIP/NIDN
                            </Label>
                            <Input 
                                placeholder="Masukkan NIP/NIDN"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Nomor WA/ID Line
                            </Label>
                            <Input 
                                placeholder="Masukkan Nomor WA/ID Line"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Email
                            </Label>
                            <Input 
                                placeholder="Masukkan Email"
                                type="email"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:12,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Foto 3x4
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input type="file"/>
                        </FormGroup>
                    </Col>
                </Row>
            }
        </Consumer>;
    }
}

class IdentitasDiriKetuaForm extends Component {
    render() {
        return <Consumer>
            {({ecRegister}) =>
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Nama
                            </Label>
                            <Input 
                                placeholder="Masukkan Nama"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                NIM/NPM
                            </Label>
                            <Input 
                                placeholder="Masukkan NIM/NPM"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:8,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Fakultas/Jurusan
                            </Label>
                            <Input 
                                placeholder="Masukkan Fakultas/Jurusan"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:4,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Semester
                            </Label>
                            <Input
                                type="number"
                                min="1"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                WA / ID Line
                            </Label>
                            <Input 
                                placeholder="Masukkan Nomor WA/ID Line"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Email
                            </Label>
                            <Input 
                                placeholder="Masukkan Email"
                                type="email"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Foto 3x4
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Scan KTM/Surat Keterangan
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            }
        </Consumer>;
    }
}

class IdentitasDiriAnggota1Form extends Component {
    render() {
        return <Consumer>
            {({ecRegister}) =>
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Nama
                            </Label>
                            <Input 
                                placeholder="Masukkan Nama"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                NIM/NPM
                            </Label>
                            <Input 
                                placeholder="Masukkan NIM/NPM"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:8,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Fakultas/Jurusan
                            </Label>
                            <Input 
                                placeholder="Masukkan Fakultas/Jurusan"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:4,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Semester
                            </Label>
                            <Input
                                type="number"
                                min="1"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                WA / ID Line
                            </Label>
                            <Input 
                                placeholder="Masukkan WA/ID Line"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Email
                            </Label>
                            <Input 
                                placeholder="Masukkan Email"
                                type="email"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Foto 3x4
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"    
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Scan KTM/Surat Keterangan
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            }
        </Consumer>;
    }
}

class IdentitasDiriAnggota2Form extends Component {
    render() {
        return <Consumer>
            {({ecRegister}) =>
                <Row
                    className="mb-1 p-3 bg-white shadow rounded"
                >
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Nama
                            </Label>
                            <Input 
                                placeholder="Masukkan Nama"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                NIM/NPM
                            </Label>
                            <Input 
                                placeholder="Masukkan NIM/NPM"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:8,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Fakultas/Jurusan
                            </Label>
                            <Input 
                                placeholder="Masukkan Fakultas/Jurusan"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:4,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Semester
                            </Label>
                            <Input
                                type="number"
                                min="1"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                WA / ID Line
                            </Label>
                            <Input 
                                placeholder="Masukkan WA/ID Line"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Email
                            </Label>
                            <Input 
                                placeholder="Masukkan Email"
                                type="email"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Foto 3x4
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"    
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        md={{
                            size:6,
                            offset:0
                        }}
                    >
                        <FormGroup>
                            <Label
                                className="small"
                            >
                                Scan KTM/Surat Keterangan
                            </Label>
                            <div
                                className="small p-3 bg-secondary rounded text-white text-center mb-1"
                            >
                                Silahkan Unggah Foto
                            </div>
                            <Input 
                                type="file"
                                size="sm"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            }
        </Consumer>;
    }
}

export default withRouter(EcRegisterPage);