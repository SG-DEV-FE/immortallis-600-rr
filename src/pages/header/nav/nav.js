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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BrowserRouter } from 'react-router-dom';
import {
  SGPSN,
  SGInstagram,
  SGLinkedIn,
  SGTwitter,
  gitRepo,
} from '../../../constants/index';

class Nav extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <section id='home'>
        <BrowserRouter>
          <MDBNavbar transparent dark expand='lg' scrolling fixed='top'>
            <MDBContainer>
              <MDBNavbarBrand>
                <AnchorLink href='#home'>
                  <img
                    className='rounded-circle z-depth-0'
                    src='https://res.cloudinary.com/stegault/image/upload/c_scale,h_30,w_30/v1561378466/brandicon_xzpby6.png'
                    alt='Brandicon'
                  />
                </AnchorLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <AnchorLink className='nav-link' href='#home'>
                      home
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className='d-inline'>about</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <AnchorLink
                          offset='40'
                          className='dropdown-item'
                          href='#personality'>
                          personality
                        </AnchorLink>
                        </MDBDropdown>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className='nav-link' offset='40' href='#gallery'>
                      gallery
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className='nav-link' offset='40' href='#contactMe'>
                      contact
                    </AnchorLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right className='social__icons--row'>
                  <MDBNavItem>
                    <a className='nav-link' href={gitRepo} target='_blank' rel="noopener noreferrer">
                      <MDBIcon fab icon='github' />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className='nav-link' href={SGPSN} target='_blank' rel="noopener noreferrer">
                      <MDBIcon fab icon='playstation' />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className='nav-link' href={SGLinkedIn} target='_blank' rel="noopener noreferrer">
                      <MDBIcon fab icon='linkedin-in' />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className='nav-link' href={SGInstagram} target='_blank' rel="noopener noreferrer">
                      <MDBIcon fab icon='instagram' />
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
