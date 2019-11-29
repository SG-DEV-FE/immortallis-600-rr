import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { testimonialData } from '../../constants/index';
import axiosConfig from '../../axiosConfig';

const Testimonial = () => {
  const [data, setTestimonial] = useState({ Testimonials: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig(testimonialData);
      setTestimonial(res.data);
    };
    fetchData();
  }, []);

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
              {data.Testimonials.map(testament => {
                return (
                  <>
                    <div
                      key={testament.id}
                      className='avatar text-center mx-auto mb-4'>
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
                  </>
                );
              })}
            </div>
            {Array.apply(null, { length: 5 }).map((e, index) => (
              <MDBIcon icon='star' className='amber-text' key={index} />
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Testimonial;
