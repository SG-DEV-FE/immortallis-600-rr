import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBIcon,
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Jumbotron = () => {
  return (
    <MDBAnimation type="fadeIn" delay=".3s">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center rgba-gradient">
          <MDBContainer className="px-md-3 px-sm-0">
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                  Stephen Gault
                </h3>
                <hr class="hr-light my-4 w-75" />
                <h4 class="subtext-header mt-2 mb-4">
                  Software Developer / Graphic Design
                </h4>

                <div className="mt-4 mx-auto text-center">
                  <AnchorLink href="#personality" offset="40">
                    <MDBIcon
                      icon="chevron-circle-down"
                      className="white-text"
                      size="2x"
                    />
                  </AnchorLink>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </MDBAnimation>
  );
};

export default Jumbotron;
