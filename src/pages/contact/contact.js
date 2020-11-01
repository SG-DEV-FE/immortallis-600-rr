import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const ContactForm = () => {
    return (
      <section id="contactMe" className="py-5 bg-g">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">              
              <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="name" icon="user">
                  <MDBIcon far icon="user" className="mr-2" />
                  Your name
                </label>
                 <input type="text" id="name" className="form-control" />
                <br />
                <label htmlFor="email">
                  <MDBIcon far icon="envelope" className="mr-2" />
                  Your email
                </label>
                <input type="email" id="email" className="form-control" />
                <br />
                <label htmlFor="subject">
                  <MDBIcon icon="tag" className="mr-2" />
                  Your subject
                </label>
                <input type="text" id="subject" className="form-control" />
                <br />
                <label htmlFor="message">
                  <MDBIcon icon="pencil-alt" className="mr-2"/>
                  Your message
                </label>
                <textarea type="text" id="message" className="form-control" rows="3" />
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