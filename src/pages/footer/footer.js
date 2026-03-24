import React, { Component } from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { SGPSN, SGInstagram, SGLinkedIn, gitRepo } from '../../constants/index';

class Footer extends Component {
  state = {};
  render() {
    return (
      <section id='footer'>
        <MDBFooter className='page-footer font-small pt-4'>
          <MDBContainer>
            <ul className='list-unstyled d-flex d-flex-row justify-content-center'>
              <li className='d-flex-item px-4'>
                <a href={gitRepo}>
                  <MDBIcon fab icon='github' />
                </a>
              </li>
              <li className='d-flex-item px-4'>
                <a href={SGPSN}>
                  <MDBIcon fab icon='playstation' />
                </a>
              </li>
              <li className='d-flex-item px-4'>
                <a href={SGLinkedIn}>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
              </li>
              <li className='d-flex-item px-4'>
                <a href={SGInstagram}>
                  <MDBIcon fab icon='instagram' />
                </a>
              </li>
            </ul>
          </MDBContainer>

          <div className='footer-copyright text-center py-3'>
            &copy; Stephen Gault{' '}
            <script>document.write(new Date().getFullYear());</script>
          </div>
        </MDBFooter>
      </section>
    );
  }
}
export default Footer;
