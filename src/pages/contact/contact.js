import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends Component {
  state = { 
    name: "", 
    email: "",
    subject: "",
    message: "" 
  };


  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <section id="contactMe" className="py-5 bg-g">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <form onSubmit={this.handleSubmit} method="POST">
              <p className="h5 text-center mb-4">Contact Me</p>
              <div className="grey-text bg-w px-4 py-4">
                <MDBInput label="Your name" name="name" icon="user" group type="text" value={name} onChange={this.handleChange} validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" name="email" value={email} onChange={this.handleChange} validate error="wrong"
                  success="right" />
                <MDBInput label="Subject" icon="tag" group type="text" name="subject" value={subject} onChange={this.handleChange} validate error="wrong" success="right" />
                <MDBInput type="textarea" rows="2" label="Your message" name="message" value={message} onChange={this.handleChange} icon="pencil-alt" />
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
}

export default ContactForm;