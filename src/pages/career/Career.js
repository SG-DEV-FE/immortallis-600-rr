import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import moment from 'moment';
import Slider from 'react-slick';
import Employment from '../../data/employment.json';

class Career extends Component {
  state = { collapseID: '' };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  render() {
    const career = Employment.Employment;
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
              <blockquote className='blockquote bq-primary'>
                <MDBIcon icon='briefcase' className='funky-font mr-2' />
                Career history - crazy I know
              </blockquote>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow className='text-center' center>
            {career.map((career, i) => {
              return (
                <React.Fragment key={i}>
                  {career.id !== 1 ? (
                    <React.Fragment>
                      <MDBCol lg={4} md={12} className='mb-4'>
                        <div className='overlay rounded z-depth-1'>
                          <img
                            src={career.snapShot}
                            className='d-block w-100'
                            alt={career.employerName}
                          />
                        </div>
                        <MDBCard className='pb-0'>
                          <MDBCardTitle className='mt-3 mb-0'>
                            {career.employerName}
                          </MDBCardTitle>
                          <MDBCardBody>
                            {career.roles.map((roleDetail, k) => {
                              return (
                                <React.Fragment key={k}>
                                  <p className='mb-0'>{roleDetail.title}</p>
                                  <MDBBtn
                                    onClick={this.toggleCollapse(career.id)}>
                                    Role Information{' '}
                                    <MDBIcon icon='caret-down' />
                                  </MDBBtn>
                                  <MDBCollapse
                                    className='collapse'
                                    id={career.id}
                                    open={this.state.collapseID === career.id}>
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
                                </React.Fragment>
                              );
                            })}
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </React.Fragment>
                  ) : (
                    <MDBCol lg={9} md={12} className='mb-4'>
                      <div className='overlay rounded z-depth-1'>
                        <img
                          src={career.snapShot}
                          className='d-block w-100'
                          alt={career.employerName}
                        />
                      </div>
                      <MDBCard className='pb-0'>
                        <MDBCardTitle className='mt-3 mb-0'>
                          {career.employerName}
                        </MDBCardTitle>
                        <MDBCardBody>
                          {career.roles.map((roleDetail, l) => {
                            return (
                              <React.Fragment key={l}>
                                <p className='mb-0'>{roleDetail.title}</p>
                                <MDBBtn
                                  onClick={this.toggleCollapse(career.id)}>
                                  Role Information <MDBIcon icon='caret-down' />
                                </MDBBtn>
                                <MDBCollapse
                                  className='collapse'
                                  id={career.id}
                                  open={this.state.collapseID === career.id}>
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
                              </React.Fragment>
                            );
                          })}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  )}
                </React.Fragment>
              );
            })}
          </MDBRow>
          <MDBRow className='slider--height my-4'>
            <MDBCol md={12} className='hidden-sm-down'>
              <Slider {...settings}>
                {career.map((career, h) => {
                  return (
                    <React.Fragment key={h}>
                      {career.id !== 11 ? (
                        <div itemID={career.id} className='px-2'>
                          <img
                            src={career.companyLogo}
                            alt={career.employerName}
                          />
                        </div>
                      ) : null}
                    </React.Fragment>
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
