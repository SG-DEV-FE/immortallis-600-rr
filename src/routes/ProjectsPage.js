import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Header from '../pages/header/header';
import Contact from '../pages/contact/contact';
import Footer from '../pages/footer/footer';

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <main>
        <section id='projects' className='py-5'>
          <MDBContainer>
            <MDBRow className='mb-3'>
              <MDBCol sm={12}>
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon icon='code' className='funky-font mr-2' />
                  Projects - Things I've built
                </blockquote>
                <p>
                  Here you'll find a collection of projects I've worked on
                  throughout my career. This section is under development and
                  will showcase various projects soon.
                </p>
                <Link to='/career'>
                  <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-left' className='me-2' />
                    Back to Career
                  </MDBBtn>
                </Link>
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

export default ProjectsPage;
