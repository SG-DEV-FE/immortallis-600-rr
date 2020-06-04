import React from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdbreact';
import { SGInstagram } from '../../constants/index';

const Gallery = () => {
  return (
    <>
      <section className='bg-g' id='gallery'>
        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon icon='gamepad' className='funky-font mr-2' /> Gallery
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow className='pb-5'>
            <MDBCol sm={12}>
              <p>
                I will present my instagram feed here and that it will contain
                mainly photography and miniatures. With the occasional bit of
                motorcycle feed <br /> I can be found under the name{' '}
                <a href={SGInstagram}>fallen_hunter_castiel</a>
              </p>
              <iframe
                src='https://snapwidget.com/embed/834445'
                className='snapwidget-widget w-100 vh-100 border-0 overflow-hidden'
                allowtransparency='true'
                frameBorder='0'
                scrolling='no'
                title='snapwidget instagram feed'></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Gallery;
