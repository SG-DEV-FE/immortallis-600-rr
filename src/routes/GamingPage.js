import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from '../pages/header/header';
import Gaming from '../pages/about/hobbies/gaming/gaming';
import Contact from '../pages/contact/contact';
import Footer from '../pages/footer/footer';

const GamingPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container py-3'>
          <Link to='/hobbies'>
            <MDBBtn color='primary' size='sm'>
              <MDBIcon icon='arrow-left' className='me-2' />
              Back to Hobbies
            </MDBBtn>
          </Link>
        </div>
        <Gaming />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default GamingPage;
