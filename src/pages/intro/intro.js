import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBAnimation,
} from 'mdbreact';
import { Link, BrowserRouter } from 'react-router-dom';
import * as Constants from '../constants';

const Intro = () => {
  const SGLinkedIn = 'https://www.linkedin.com/in/sg-dev';
  return (
    <section id="about" class=" py-5 ">
      <MDBContainer>
        <div className="avatar mx-auto text-center mb-2">
          <BrowserRouter>
            <Link to={SGLinkedIn}>
              <img
                src="https://www.gravatar.com/avatar/e6aecbcb76ece075dc321fcae02c29ca"
                alt="Stephen Gault - Software Developer / Graphic Design"
                class="rounded-circle img-fluid z-depth-3"
              />
            </Link>
          </BrowserRouter>
        </div>

        {/* BLurb about me goes here */}
      </MDBContainer>
    </section>
  );
};

export default Intro;
