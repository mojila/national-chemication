import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Badge
} from 'reactstrap';
import {
    withRouter
} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import ReactLoading from 'react-loading';

class AdminDashboardPage extends Component {
  render() {
    let {history} = this.props;

    return (
      <div>
        <Navigator history={history}/>
      </div>
    );
  }
}

class Navigator extends Component {
  componentDidMount() {
    document.body.style.background = "#e3e3e3";
  }

  render() {
    let {history} = this.props;

    return (
      <Navbar bg="light" light className="shadow bg-white">
        <Container>
          <NavbarBrand>Administrator</NavbarBrand>
          <Nav>
            <NavItem>
              <div className="small pointer p-2 mx-4"
                onClick={() => history.push('/dashboard/admin')}
              >Beranda</div>
            </NavItem>
            <NavItem>
              <div className="pointer small border p-2 rounded"
                onMouseOver={(e) => e.target.className="pointer small p-2 border rounded bg-primary text-white shadow"}
                onMouseLeave={(e) => e.target.className="pointer small p-2 border rounded"}
                onClick={() => {
                  localStorage.removeItem('uid');

                  history.push('/');
                }}
              >Logout</div>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(AdminDashboardPage);
