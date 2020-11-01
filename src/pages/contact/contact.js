import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const ContactForm = () => {
    return (
      <section id="contactMe" className="py-5 bg-g">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
              <input type="hidden" name="form-name" value="contact" />
              <p className="h5 text-center mb-4">Contact Me</p>
              <div className="grey-text bg-w px-4 py-4">
                <MDBInput label="Your name" name="name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" name="email"validate error="wrong"
                  success="right" />                
                <MDBInput type="textarea" rows="2" label="Your message" name="message" icon="pencil-alt" />
                <div data-netlify-recaptcha="true"></div>
              </div>
              <div className="text-center py-2 px-4 bg-w  ">
                <MDBBtn outline color="secondary">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
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