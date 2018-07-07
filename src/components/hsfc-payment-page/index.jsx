import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Progress
} from 'reactstrap';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

import {database} from './../../firebase/firebase';
import bg from './../../statics/images/hsfc.jpeg';

class HsfcPaymentPage extends Component {
  componentDidMount() {
    document.title = "Bukti Pembayaran Peserta HSFC";
    document.body.style.background = "url('"+bg+"')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    let {history} = this.props;

    return (
      <Container className="mt-md-5 mb-5">
        <Row>
            <Col md={{size:4, offset:4}}>
                <Animated animationIn="flipInY" isVisible>
                  <PaymentForm history={history}/>
                </Animated>
            </Col>
        </Row>
      </Container>
    );
  }
}

class PaymentForm extends Component {
  state = {
    sekolah: '',
    buktiPembayaran: '',
    isLoading: false
  };

  onSubmit(e) {
    let {history} = this.props;
    let {
      sekolah,
      buktiPembayaran
    } = this.state;

    this.setState({
      isLoading: true
    });

    let key = database.ref().child('buktiPembayaran').push().key;

    database.ref('buktiPembayaran/' + key).set({
      sekolah,
      buktiPembayaran
    })
    .then(() => {
      this.setState({
        isLoading: false
      });

      swal("Bukti Pembayaran Anda Telah ter-Upload, Kami akan mengirimkan SMS/Pesan Konfirmasi.")
      .then(() => history.push('/'));
    });

    e.preventDefault();
  }

  render() {
    let {history} = this.props;
    let {
      isLoading,
      sekolah,
      buktiPembayaran
    } = this.state;

    return (
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col>
              <Button className="shadow" color="light" size="sm"
                onClick={() => history.push('/')}
              >Beranda</Button>
            </Col>
            <Col>
              <p className="m-0 p-0 text-right text-uppercase">Konfirmasi pembayaran</p>
            </Col>
          </Row>

          <Row className="mb-1 p-3 bg-white shadow rounded">
            <Col md="12">
              <FormGroup>
                <Label className="small text-uppercase">Nama Sekolah</Label>
                <Input size="sm" value={sekolah}
                  onChange={(e) => this.setState({sekolah: e.target.value})}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label className="small text-uppercase">Foto Bukti Pembayaran</Label>
                {!buktiPembayaran
                && <div className="p-2 text-center small text-white bg-warning rounded mb-1">
                  Upload Bukti Pembayaran
                </div>}
                {buktiPembayaran
                && <div>
                  <img src={buktiPembayaran} className="img-fluid mb-1"/>
                </div>}
                <Input className="small" type="file"
                  onChange={(e) => {
                    let reader = new FileReader();

                    if (e.target.files && e.target.files[0]) {
                      reader.onload = (e) => this.setState({buktiPembayaran: e.target.result});

                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="p-3 bg-white shadow rounded">
            <Col>
              <Button className="shadow" color="primary" block
                disabled={isLoading}
              >
                {isLoading
                && <ReactLoading type="spin" width={24} height={24} color="white" className="mx-auto"/>}
                {!isLoading
                && 'Konfirmasi'}
              </Button>
            </Col>
          </Row>
        </Form>
    );
  }
}

export default withRouter(HsfcPaymentPage);
