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
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={10}
          showControls={true}
          showIndicators={true}
          className="z-depth-1 w-100"
          interval="5000">
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
                    <MDBCard
                      className="mx-auto"
                      style={{ height: '200px', width: 'auto' }}>
                      <MDBCardImage
                        src={career.companyLogo}
                        style={{ width: 'auto', height: '50px' }}
                        className="mx-auto my-2"
                      />
                      <MDBCardBody>
                        {career.roles.map(roleDetail => {
                          return (
                            <MDBCardTitle>{roleDetail.title}</MDBCardTitle>
                          );
                        })}

                        <MDBBtn></MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              );
            })}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </section>
  );
};

export default Career;
