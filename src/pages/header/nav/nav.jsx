import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarItem,
  MDBIcon,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from 'mdb-react-ui-kit';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BrowserRouter } from 'react-router-dom';
import {
  SGPSN,
  SGInstagram,
  SGLinkedIn,
  gitRepo,
} from '../../../constants/index';

class Nav extends Component {
  state = {
    isOpen: false,
    scrolled: false,
    activeSection: 'home',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== this.state.scrolled) {
      this.setState({ scrolled: isScrolled });
    }

    // Update active section based on scroll position
    const sections = ['home', 'personality', 'gallery', 'contactMe'];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        if (this.state.activeSection !== sections[i]) {
          this.setState({ activeSection: sections[i] });
        }
        break;
      }
    }
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const navbarClasses = `navbar-transparent ${this.state.scrolled ? 'scrolled' : ''}`;
    return (
      <section id='home'>
        <BrowserRouter>
          <MDBNavbar
            expand='lg'
            dark
            bgColor='transparent'
            fixed='top'
            className={navbarClasses}>
            <MDBContainer>
              <MDBNavbarBrand href='#home'>
                <img
                  className='rounded-circle z-depth-0'
                  src='https://res.cloudinary.com/stegault/image/upload/c_scale,h_30,w_30/v1561378466/brandicon_xzpby6.png'
                  alt='Brandicon'
                />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse}
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </MDBNavbarToggler>
              <MDBCollapse navbar open={this.state.isOpen}>
                <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                  <MDBNavbarItem>
                    <AnchorLink
                      className={`nav-link ${this.state.activeSection === 'home' ? 'active' : ''}`}
                      href='#home'
                      onClick={() => this.setActiveSection('home')}>
                      home
                    </AnchorLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle tag='a' className='nav-link'>
                        about
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <AnchorLink
                          offset='40'
                          className='dropdown-item'
                          href='#personality'
                          onClick={() => this.setActiveSection('personality')}>
                          personality
                        </AnchorLink>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <AnchorLink
                      className={`nav-link ${this.state.activeSection === 'gallery' ? 'active' : ''}`}
                      offset='40'
                      href='#gallery'
                      onClick={() => this.setActiveSection('gallery')}>
                      gallery
                    </AnchorLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <AnchorLink
                      className={`nav-link ${this.state.activeSection === 'contactMe' ? 'active' : ''}`}
                      offset='40'
                      href='#contactMe'
                      onClick={() => this.setActiveSection('contactMe')}>
                      contact
                    </AnchorLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
                <MDBNavbarNav className='ms-auto flex-row justify-content-end'>
                  <MDBNavbarItem>
                    <a
                      className='nav-link p-2'
                      href={gitRepo}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <MDBIcon fab icon='github' />
                    </a>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <a
                      className='nav-link p-2'
                      href={SGPSN}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <MDBIcon fab icon='playstation' />
                    </a>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <a
                      className='nav-link p-2'
                      href={SGLinkedIn}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <MDBIcon fab icon='linkedin-in' />
                    </a>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <a
                      className='nav-link p-2'
                      href={SGInstagram}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <MDBIcon fab icon='instagram' />
                    </a>
                  </MDBNavbarItem>
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
