import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div className="bg-dark">
                <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">W e a t h e r  C h e c k e r</NavbarBrand>                      

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <a className="nav-link" href='https://hanannawaz.com/'><span className="fa fa-address-card fa-lg"></span> Contact Us</a>
                            </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;

