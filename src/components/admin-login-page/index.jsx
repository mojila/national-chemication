import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {
    withRouter
} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {auth,database} from './../../firebase/firebase';

class AdminLoginPage extends Component {
    componentDidMount() {
        document.body.style.background = "#e3e3e3";
    }

    render() {
      let {history} = this.props;

      return (
        <Container className="mt-md-4 mb-4">
            <Row>
                <Col md={{size:4,offset:4}}>
                  <LoginForm history={history}/>
                </Col>
            </Row>
        </Container>
      );
    }
}

class LoginForm extends Component {
  state = {
    isLoading: '',
    error: '',
    email: '',
    password: ''
  };

  onSubmit(e) {
    let {history} = this.props;
    let {
      error,
      email,
      password
    } = this.state;

    this.setState({isLoading: true});

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      
    })
    .catch((error) => this.setState(error));

    e.preventDefault();
  }

  render() {
    let {
      isLoading,
      error,
      email,
      password
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
          <Row className="p-3 mb-1 shadow bg-white rounded">
              <Col>
                  <div className="small text-center text-capitalize">
                      Admin Login
                  </div>
              </Col>
          </Row>
          {error
          && <Row className="p-3 mb-1 shadow bg-danger rounded">
              <Col>
                  <div class="small text-white text-center">{error}</div>
              </Col>
          </Row>}
          <Row className="p-3 mb-1 shadow bg-white rounded">
              <Col md="12">
                  <FormGroup>
                      <Label size="sm">Email</Label>
                      <Input size="sm" type="email" placeholder="Masukkan email"
                        value={email}
                        onChange={(e) => this.setState({email: e.target.value})}
                      />
                  </FormGroup>
              </Col>
              <Col md="12">
                  <FormGroup>
                      <Label size="sm">Password</Label>
                      <Input size="sm" type="password" placeholder="Masukkan password"
                        value={password}
                        onChange={(e) => this.setState({password: e.target.value})}
                      />
                  </FormGroup>
              </Col>
          </Row>
          <Row className="p-3 mb-1 shadow bg-white rounded">
              <Col md={{size:6,offset:6}}>
                  <Button size="sm" color="primary" className="shadow" block
                    disabled={isLoading || error}
                  >
                    {isLoading && <ReactLoading type="spin" width={24} height={24} className="mx-auto" color="white"/>}
                    {!isLoading && 'Login'}
                  </Button>
              </Col>
          </Row>
      </Form>
    );
  }
}

export default withRouter(AdminLoginPage);
