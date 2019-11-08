import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBBtn,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBIcon,
} from 'mdbreact';
import data from '../../../src/data';

const Career = () => {
  const career = data.Employment;
  return (
    <section id="career" className="py-5">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <h5 className="font-weight-bold my-3 w-responsive">
              Career history - crazy I know
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={10}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 w-100">
        <MDBCarouselInner>
          {career.map((career, i) => {
            return (
              <MDBCarouselItem key={i} itemId={career.id}>
                <MDBView>
                  <img
                    src={career.snapShot}
                    className="d-block w-100"
                    alt={career.employerName}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <div
                    className="card"
                    style={{ width: '12rem', height: '200px' }}>
                    <img
                      src={career.companyLogo}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default Career;
