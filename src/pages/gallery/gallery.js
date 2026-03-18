import React from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
import { SGInstagram, instaAdd, imgUrl } from '../../constants/index';

const Gallery = () => {
  return (
    <>
      <section className='bg-g' id='gallery'>
        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon icon='palette' className='funky-font mr-2' /> Gallery
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow className='pb-5'>
            <MDBCol sm={12}>
              <p>
                Here is a gallery of my recent instagram posts, it will usually
                contain mainly photography and miniatures. With the occasional
                bit of motorcycle feed <br /> I can be found under the name{' '}
                <a href={SGInstagram}>fallen_hunter_castiel</a>
              </p>
              <img
                src={imgUrl + instaAdd}
                className='rounded mx-auto d-block w-25 my-4 z-depth-3'
                alt='steve gault instagram'
              />

              {/* SnapWidget */}
              <iframe
                src='https://snapwidget.com/embed/886590'
                className='snapwidget-widget w-100 border-0'
                style={{ height: '1400px', overflow: 'visible' }}
                allowtransparency='true'
                title='snapwidget instagram feed'></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Gallery;
