import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Testimonials } from './Testimonial.json';

const Testimonial = () => {
  const testimonial = Testimonials;
  return (
    <section id='testimonial' className='py-5 bg-g'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol sm={12}>
            <h5 className='font-weight-bold my-3'>
              Testimonial - hereby I bequeath myself to the flatteration of
              thine peers, to whit one Matthew Wilson
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow>
          <MDBCol className='text-center'>
            <div className='testimonial '>
              {testimonial.map((testament, i) => {
                return (
                  <>
                    <div key={i} className='avatar text-center mx-auto mb-4'>
                      <a
                        href={testament.testimonialSource}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                          src={testament.testimonialAvatar}
                          alt={testament.imageAlt}
                          className='rounded-circle img-fluid z-depth-3'
                        />
                      </a>
                    </div>
                    <div className='pt-3'>
                      <p className='text-justify'>
                        <MDBIcon icon='quote-left' />
                        {testament.testimonialContent}
                        <MDBIcon icon='quote-right' />
                      </p>
                    </div>
                    <h4
                      className='font-weight-bold'
                      href={testament.testimonialSource}>
                      Matt Wilson
                    </h4>
                    <h6 className='font-weight-bold my-3'>
                      Sales and Marketing Director at{' '}
                      <a
                        href={testament.companyURL}
                        alt={testament.companyName}>
                        D2i Systems Ltd
                      </a>
                    </h6>
                    {Array.apply(null, { length: 5 }).map((e, i) => (
                      <MDBIcon icon='star' className='amber-text' key={i} />
                    ))}
                  </>
                );
              })}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Testimonial;
