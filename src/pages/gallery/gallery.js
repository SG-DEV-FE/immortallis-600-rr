import React from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdbreact';

const Gallery = () => {
  return (
    <>
      <section className='bg-w' id='gallery'>
        <MDBContainer>
          <MDBRow className='mt-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon icon='gamepad' className='funky-font mr-2' /> Gallery
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-5'>
            <MDBCol sm={12} md={6}>
              <iframe
                src='https://snapwidget.com/embed/834445'
                className='snapwidget-widget'
                allowtransparency='true'
                frameBorder='0'
                scrolling='no'></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Gallery;
