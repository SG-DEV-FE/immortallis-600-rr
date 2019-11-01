import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BrowserRouter } from 'react-router-dom';
import {
  SGPSN,
  SGInstagram,
  SGLinkedIn,
  SGTwitter,
} from '../../../constants/index';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onCollapse.bind(this);
  }

  onCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <section id="home">
        <BrowserRouter>
          <MDBNavbar transparent dark expand="lg" scrolling fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <AnchorLink href="#home">
                  <img
                    className="rounded-circle z-depth-0"
                    src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_30,w_30/v1561378466/brandicon_xzpby6.png"
                    alt="Brandicon"
                  />
                </AnchorLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onCollapse} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left smooth-scroll>
                  <MDBNavItem active>
                    <AnchorLink className="nav-link" href="#home">
                      Home
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#about">
                      about
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#career">
                      career
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#testimonial">
                      testimonial
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#gallery">
                      gallery
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#contact">
                      contact
                    </AnchorLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a className="nav-link" href={SGPSN}>
                      <MDBIcon fab icon="playstation" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="nav-link" href={SGLinkedIn}>
                      <MDBIcon fab icon="linkedin-in" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="nav-link" href={SGTwitter}>
                      <MDBIcon fab icon="twitter" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="nav-link" href={SGInstagram}>
                      <MDBIcon fab icon="instagram" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </BrowserRouter>
      </section>
    );
  }
}
export default Nav;
