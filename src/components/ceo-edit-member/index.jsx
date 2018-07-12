import React, {Component} from 'react';
import {
    Progress,
    Container,
    Row,
    Col
} from 'reactstrap';
import {
    withRouter
} from 'react-router-dom';
import {Animated} from 'react-animated-css';

import {Navigator} from './../ceo-dashboard-page/ceoDashboardPage';
import IdentitasKetuaForm from './identitasKetuaForm';
import IdentitasAnggota1Form from './identitasAnggota1Form';
import IdentitasAnggota2Form from './identitasAnggota2Form';

class CeoEditMember extends Component {
    componentDidMount() {
        let { step } = this.props.match.params;

        if (Number(step) === 1) {
            document.title = "Edit Biodata Anggota: Ketua";
        } else if (Number(step) === 2) {
            document.title = "Edit Biodata Anggota: Anggota 1";
        } else if (Number(step) === 3) {
            document.title = "Edit Biodata Anggota: Anggota 2";
        }
    }

    render() {
        let {match, history} = this.props;

        return <div>
            <Navigator/>
            <Container style={{marginTop: '5rem'}}>
                <Animated
                    isVisible
                    animationIn="fadeIn"
                >
                    <Row>
                        <Col>
                            <div className="small text-capitalize text-center">
                                Identitas diri ketua
                            </div>
                        </Col>
                        <Col>
                            <div className="small text-capitalize text-center">
                                Identitas Anggota 1
                            </div>
                        </Col>
                        <Col>
                            <div className="small text-capitalize text-center">
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
                    </Row>
                </Animated>
                
                <Row className="mt-4 mb-4">
                    <Col md={{size:8,offset:2}}>
                    {
                        Number(match.params.step) === 1
                        && <IdentitasKetuaForm history={history}/>
                    }
                    {
                        Number(match.params.step) === 2
                        && <IdentitasAnggota1Form history={history}/>
                    }
                    {
                        Number(match.params.step) === 3
                        && <IdentitasAnggota2Form history={history}/>
                    }
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export default withRouter(CeoEditMember);
