import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const ContactForm = () => {
    return (
      <section id="contactMe" className="py-5 bg-g">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <p className="h4 text-center mb-4">Contact me using the form below</p>
                <label htmlFor="name" icon="user">
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon far icon="user" className="mr-2 funky-font" />
                  Your name
                </blockquote>
                </label>
                 <input type="text" id="name" name="name" className="form-control" />
                <br />
                <label htmlFor="email">
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon far icon="envelope" className="mr-2 funky-font" />
                  Your email
                  </blockquote>
                </label>
                <input type="email" id="email" name="email" className="form-control" />
                <br />
                <label htmlFor="subject">
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon icon="tag" className="mr-2 funky-font" />
                  Your subject
                  </blockquote>
                </label>
                <input type="text" id="subject" name="subject" className="form-control" />
                <br />
                <label htmlFor="message">
                <blockquote className='blockquote bq-primary'>
                  <MDBIcon icon="pencil-alt" className="mr-2 funky-font"/>
                  Your message
                  </blockquote>
                </label>
                <textarea type="text" id="message" name="message" className="form-control" rows="3" />
                <div className="text-center mt-4">
                  <MDBBtn color="secondary" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </section>
    );
  }

export default ContactForm;