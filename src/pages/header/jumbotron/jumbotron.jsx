import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Jumbotron = () => {
  return (
    <div
      className='view--bg'
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div
        className='rgba-gradient'
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MDBContainer className='px-md-3 px-sm-0'>
          <MDBRow>
            <MDBCol md={12} className='mb-4 white-text text-center'>
              <h3 className='display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5'>
                Stephen Gault
              </h3>
              <hr className='hr-light my-4 w-75' />
              <h4 className='subtext-header mt-2 mb-4'>UI / UX Developer</h4>

              <div className='mt-4 mx-auto text-center'>
                <AnchorLink href='#personality' offset='40'>
                  <MDBIcon
                    icon='chevron-circle-down'
                    className='white-text bounce'
                    size='2x'
                  />
                </AnchorLink>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Jumbotron;
