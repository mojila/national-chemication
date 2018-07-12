import React, {Component} from 'react';
import {
  Progress,
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
    withRouter
} from 'react-router-dom';
import {Animated} from 'react-animated-css';

import bg from './../../statics/images/essay.jpg';
import {database} from './../../firebase/firebase';
import InfoDasarForm from './infoDasarForm';
import DosenPembimbingForm from './dosenPembimbingForm';
import KetuaForm from './ketuaForm';
import Anggota1Form from './anggota1Form';
import Anggota2Form from './anggota2Form';
import Finish from './finish';

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

export const sessionSet = (propertyName, value) => {
  sessionStorage.setItem(propertyName, value);
};

export const sessionGet = (propertyName) => sessionStorage.getItem(propertyName);

export default withRouter(EcRegisterPage);
