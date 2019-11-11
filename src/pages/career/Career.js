import React, { Component } from 'react';
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
  MDBModal,
  MDBModalBody,
  MDBRow,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBCollapse,
} from 'mdbreact';
import moment from 'moment';
import data from '../../../src/data';

class Career extends Component {
  state = { collapseID: '' };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  render() {
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
          <MDBRow className="text-center" center>
            {career.map((career, i) => {
              return (
                <>
                  {career.id !== 1 ? (
                    <>
                      <MDBCol key={i} lg="4" md="12" className="mb-4">
                        <MDBView className="overlay rounded z-depth-1">
                          <img
                            src={career.snapShot}
                            className="d-block w-100"
                            alt={career.employerName}
                          />
                          <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCard className="pb-0">
                          <MDBCardTitle className="mt-3 mb-0">
                            {career.employerName}
                          </MDBCardTitle>
                          <MDBCardBody>
                            {career.roles.map(roleDetail => {
                              return (
                                <>
                                  <p className="mb-0">{roleDetail.title}</p>
                                  <MDBBtn
                                    onClick={this.toggleCollapse(career.id)}>
                                    Role Information{' '}
                                    <MDBIcon icon="caret-down" />
                                  </MDBBtn>
                                  <MDBCollapse
                                    className="collapse"
                                    id={career.id}
                                    isOpen={this.state.collapseID}>
                                    <p>{roleDetail.description}</p>
                                    <p>
                                      {moment(roleDetail.startDate).format(
                                        'DD-MM-YYYY'
                                      )}{' '}
                                      -{' '}
                                      {roleDetail.endDate !== null ? (
                                        <span>
                                          {moment(roleDetail.endDate).format(
                                            'DD-MM-YYYY'
                                          )}
                                        </span>
                                      ) : (
                                        <span>Ongoing</span>
                                      )}
                                    </p>
                                  </MDBCollapse>
                                  <MDBBtn>
                                    <MDBIcon icon="clone" /> Open Me!
                                  </MDBBtn>
                                </>
                              );
                            })}
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </>
                  ) : (
                    <MDBCol key={i} lg="9" md="12" className="mb-4">
                      <MDBView className="overlay rounded z-depth-1">
                        <img
                          src={career.snapShot}
                          className="d-block w-100"
                          alt={career.employerName}
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCard className="pb-0">
                        <MDBCardTitle className="mt-3 mb-0">
                          {career.employerName}
                        </MDBCardTitle>
                        <MDBCardBody>
                          {career.roles.map(roleDetail => {
                            return (
                              <>
                                <p className="mb-0">{roleDetail.title}</p>
                                <MDBBtn
                                  onClick={this.toggleCollapse(career.id)}>
                                  Role Information <MDBIcon icon="caret-down" />
                                </MDBBtn>
                                <MDBCollapse
                                  className="collapse"
                                  id={career.id}
                                  isOpen={this.state.collapseID}>
                                  <p>{roleDetail.description}</p>
                                  <p>
                                    {moment(roleDetail.startDate).format(
                                      'DD-MM-YYYY'
                                    )}{' '}
                                    -{' '}
                                    {roleDetail.endDate !== null ? (
                                      <span>
                                        {moment(roleDetail.endDate).format(
                                          'DD-MM-YYYY'
                                        )}
                                      </span>
                                    ) : (
                                      <span>Ongoing</span>
                                    )}
                                  </p>
                                </MDBCollapse>
                                <MDBBtn>
                                  <MDBIcon icon="clone" /> Open Me!
                                </MDBBtn>
                              </>
                            );
                          })}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  )}
                </>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </section>
      /* 
      <MDBCarousel
        activeItem={1}
        length={10}
        showControls={false}
        showIndicators={false}
        className="z-depth-1 w-100"
        interval="5000">
        <MDBCarouselInner>
          {career.map((career, i) => {
            return (
              <MDBCarouselItem className="col-md-3" key={i} itemId={career.id}>
                <MDBView>
                  <img
                    src={career.snapShot}
                    className="d-block w-100"
                    alt={career.employerName}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel> */
    );
  }
}

export default Career;
