import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const SGLinkedIn = "https://www.linkedin.com/in/sg-dev";
    const SGTwitter = "https://twitter.com/Groghall";
    const SGInstagram = "https://www.instagram.com/fallen_hunter_castiel/";
    const SGPSN = "https://my.playstation.com/profile/groghall";

    return (
      <div id="intro">
        <Router>
          <MDBNavbar transparent dark expand="lg" scrolling fixed="top">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <img
                  className="rounded-circle z-depth-0"
                  src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_30,w_30/v1561378466/brandicon_xzpby6.png"
                  alt="Brandicon"
                />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left smooth-scroll>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="about">about</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="career">career</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="testimonial">testimonial</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="gallery">gallery</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="contact">contact</MDBNavLink>
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
        </Router>
      </div>
    );
  }
}
export default Nav;
