import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import AnchorLinkModule from 'react-anchor-link-smooth-scroll';

const AnchorLink =
  typeof AnchorLinkModule === 'function'
    ? AnchorLinkModule
    : AnchorLinkModule.default;

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
            <MDBCol md={12} className='mb-4 text-center white-text'>
              <h3 className='pt-5 mb-0 display-3 font-weight-bold white-text pt-md-5'>
                Stephen Gault
              </h3>
              <hr className='my-4 hr-light w-75' />
              <h4 className='mt-2 mb-4 subtext-header'>UI / UX Developer</h4>

              <div className='mx-auto mt-4 text-center'>
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
