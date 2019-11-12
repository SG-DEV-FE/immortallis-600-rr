import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon } from 'mdbreact';

const Hobbies = () => {
  return (
    <>
      <section id="hobbies">
        <MDBContainer>
          <MDBRow className="mb-3">
            <MDBCol sm="12">
              <h5 className="font-weight-bold my-3 w-responsive">
                Downtime / Hobbies - or how I cling to my sanity
              </h5>
              <p>
                So below is a selection of how I chill the out, this is by far
                not extensive but I think it'll do for the purposes of conveying
                how much of a Nerd/Geek I am. I agonized for what seemed an eon
                for the best approach to this. I think I will start with biggest
                addiction and feed down from there.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <a href="https://psnprofiles.com/groghall">
              <img
                src="https://card.psnprofiles.com/2/groghall.png"
                border="0"
              />
            </a>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Hobbies;
