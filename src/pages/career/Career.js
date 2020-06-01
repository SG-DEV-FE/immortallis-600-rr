import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBCollapse,
} from 'mdbreact';
import moment from 'moment';
import Slider from 'react-slick';
import { Employment } from '../../data/employment.json';

class Career extends Component {
  state = { collapseID: '' };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  render() {
    const career = Employment;
    const settings = {
      autoplay: true,
      centerMode: true,
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <section id='career' className='py-5'>
        <MDBContainer>
          <MDBRow className='mb-3'>
            <MDBCol sm={12}>
              <h5 className='font-weight-bold my-3 w-responsive'>
                Career history - crazy I know
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow className='text-center' center>
            {career.map((career, i) => {
              return (
                <>
                  {career.id !== 1 ? (
                    <>
                      <MDBCol key={i} lg={4} md={12} className='mb-4'>
                        <MDBView className='overlay rounded z-depth-1'>
                          <img
                            src={career.snapShot}
                            className='d-block w-100'
                            alt={career.employerName}
                          />
                          <MDBMask overlay='black-light' />
                        </MDBView>
                        <MDBCard className='pb-0'>
                          <MDBCardTitle className='mt-3 mb-0'>
                            {career.employerName}
                          </MDBCardTitle>
                          <MDBCardBody>
                            {career.roles.map((roleDetail, k) => {
                              return (
                                <>
                                  <p className='mb-0' key={k}>
                                    {roleDetail.title}
                                  </p>
                                  <MDBBtn
                                    onClick={this.toggleCollapse(career.id)}>
                                    Role Information{' '}
                                    <MDBIcon icon='caret-down' />
                                  </MDBBtn>
                                  <MDBCollapse
                                    className='collapse'
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
                                  <MDBBtn
                                    href={career.companyURL}
                                    target='_blank'>
                                    <MDBIcon icon='clone' /> View{' '}
                                    {career.employerName}
                                  </MDBBtn>
                                </>
                              );
                            })}
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </>
                  ) : (
                    <MDBCol key={i} lg={9} md={12} className='mb-4'>
                      <MDBView className='overlay rounded z-depth-1'>
                        <img
                          src={career.snapShot}
                          className='d-block w-100'
                          alt={career.employerName}
                        />
                        <MDBMask overlay='black-light' />
                      </MDBView>
                      <MDBCard className='pb-0'>
                        <MDBCardTitle className='mt-3 mb-0'>
                          {career.employerName}
                        </MDBCardTitle>
                        <MDBCardBody>
                          {career.roles.map((roleDetail, l) => {
                            return (
                              <>
                                <p className='mb-0' key={l}>
                                  {roleDetail.title}
                                </p>
                                <MDBBtn
                                  onClick={this.toggleCollapse(career.id)}>
                                  Role Information <MDBIcon icon='caret-down' />
                                </MDBBtn>
                                <MDBCollapse
                                  className='collapse'
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
                                <MDBBtn
                                  href={career.companyURL}
                                  target='_blank'>
                                  <MDBIcon icon='clone' /> View{' '}
                                  {career.employerName}
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
          <MDBRow className='slider--height my-4'>
            <MDBCol md={12} className='hidden-sm-down'>
              <Slider {...settings}>
                {career.map((career, h) => {
                  return (
                    <>
                      {career.id !== 11 ? (
                        <>
                          <div key={h} itemID={career.id} className='px-2'>
                            <img
                              src={career.companyLogo}
                              alt={career.employerName}
                            />
                            <MDBMask overlay='black-light' />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </Slider>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Career;
