import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Header from '../pages/header/header';
import Contact from '../pages/contact/contact';
import Footer from '../pages/footer/footer';

const HobbiesPage = () => {
  return (
    <>
      <Header />
      <main>
        <section id='hobbies' className='py-5'>
          <MDBContainer>
            <MDBRow className='mb-3'>
              <MDBCol sm={12}>
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon icon='umbrella-beach' className='funky-font mr-2' />
                  Downtime / Hobbies - or how I cling to my sanity
                </blockquote>
                <p>
                  So below is a selection of how I chill out, this is by far not
                  extensive but I think it'll do for the purposes of conveying
                  how much of a Nerd/Geek I am. I agonized for what seemed an
                  eon for the best approach to this. I think I will start with
                  biggest addiction and feed down from there.
                </p>
                <p>
                  Fair warning though this is a big list, so feel free to skip
                  this if you want...
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow className='mt-5'>
              <MDBCol md={6} className='mb-4'>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <MDBIcon icon='gamepad' className='me-2' />
                      Gaming
                    </MDBCardTitle>
                    <MDBCardText>
                      Explore my gaming adventures, favorite titles, and gaming
                      setup.
                    </MDBCardText>
                    <Link to='/hobbies/gaming'>
                      <MDBBtn color='primary'>View Gaming</MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md={6} className='mb-4'>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <MDBIcon icon='images' className='me-2' />
                      Gallery
                    </MDBCardTitle>
                    <MDBCardText>
                      Check out my photo gallery and various creative endeavors.
                    </MDBCardText>
                    <Link to='/hobbies/gallery'>
                      <MDBBtn color='primary'>View Gallery</MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HobbiesPage;
