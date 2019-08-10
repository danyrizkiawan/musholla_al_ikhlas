import React, {
    Component
} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Musholla Al-Ikhlas</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="http://localhost:3000">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="http://localhost:3000/information">
                                        Informasi
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="http://localhost:3000/about">
                                        Tentang
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/danyrizkiawan/musholla_al_ikhlas">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default AppNavbar;