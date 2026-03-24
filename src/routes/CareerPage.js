import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import Header from '../pages/header/header';
import Career from '../pages/career/Career';
import Testimonial from '../pages/career/Testimonial';
import Contact from '../pages/contact/contact';
import Footer from '../pages/footer/footer';

const CareerPage = () => {
  return (
    <>
      <Header />
      <main>
        <MDBContainer className='mt-5 pt-3'>
          <MDBRow>
            <MDBCol className='text-end'>
              <Link to='/career/projects'>
                <MDBBtn color='primary' size='sm'>
                  <MDBIcon icon='code' className='me-2' />
                  View Projects
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Career />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CareerPage;
