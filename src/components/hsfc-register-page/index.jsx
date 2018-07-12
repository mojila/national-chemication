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
import InfoDasarForm from './infoDasarForm';
import OfficialForm from './officialForm';
import Pemain1Sd5Form from './pemain1Sd5Form';
import Pemain6Sd10Form from './pemain6Sd10Form';
import Finish from './finish';

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
                  <div className="small text-capitalize text-center text-white">
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

export default withRouter(HsfcRegisterPage);
