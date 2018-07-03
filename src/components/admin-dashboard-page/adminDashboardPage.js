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
    withRouter,
    Link
} from 'react-router-dom';
import {Animated} from 'react-animated-css';

class AdminDashboardPage extends Component {
    componentDidMount() {
        document.title = "Dashboard Panitia";
        document.body.style.background = "#e3e3e3";
    }
    
    render() {
        return <div>
            <Navigator/>
        </div>;
    }
}

export class Navigator extends Component {
    constructor(props) {
        super(props);

        this.onToggle = this.onToggle.bind(this);

        this.state = {
            menuToggle: false
        };
    }

    onToggle() {
        this.setState({
            menuToggle: !this.state.menuToggle
        });
    }

    render() {
        let {menuToggle} = this.state;

        return <Navbar className="shadow" color="light" light fixed="top">
            <Container>
                <NavbarBrand>Dashboard Panitia</NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Button color="light" size="sm" tag={Link} to="/dashboard/admin" className="shadow rounded mr-4 small">Beranda</Button> 
                    </NavItem>
                    <NavItem>
                        <Button color="light" size="sm" className="shadow rounded mr-4 small" onClick={this.onToggle}>Daftar Peserta</Button>
                        <Animated animationOut="" isVisible={menuToggle}>
                            <div className="p-2 bg-white rounded shadow position-absolute mt-4">
                                <React.Fragment>
                                    <li>
                                        <Button color="light" size="sm" className="pl-5 pr-5" block tag={Link} to="/dashboard/admin/peserta/ceo">CEO</Button>
                                    </li>
                                    <li>
                                        <Button color="light" size="sm" className="pl-5 pr-5" block tag={Link} to="/dashboard/admin/peserta/ec">EC</Button>
                                    </li>
                                    <li>
                                        <Button color="light" size="sm" className="pl-5 pr-5" block tag={Link} to="/dashboard/admin/peserta/hsfc">HSFC</Button>
                                    </li>
                                </React.Fragment>
                            </div>
                        </Animated>
                    </NavItem>
                    <NavItem>
                        <Button size="sm" color="danger" className="shadow">Log Out</Button>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>;
    }
}

export default withRouter(AdminDashboardPage);