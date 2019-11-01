import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { SGLinkedIn, Gravatar, DA } from '../../constants/index';

const Intro = () => {
  return (
    <section id="about" class="py-5">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <div className="avatar mx-auto text-center mb-2">
              <a href={SGLinkedIn} target="_blank">
                <img
                  src={Gravatar}
                  alt="Stephen Gault - Software Developer / Graphic Design"
                  class="rounded-circle img-fluid z-depth-3"
                />
              </a>
            </div>
          </MDBCol>
          <MDBCol sm="12">
            <h3 className="lead text-center h3-responsive mx-auto mt-3">
              Welcome Ladies & Gents / Orruks & Duardin / Cats & Dogs, you get
              the picture.
            </h3>
            <p class="text-center mx-auto mb-5 w-responsive">
              This is me (song's in your head now). I built this little old site
              to showcase my skills and generally show off some of my
              personality, that as you have no doubt already surmised is on the
              dry wit side.
            </p>
            <p class="text-center mx-auto mb-5 w-responsive">
              Call it an informal cv if you want.
            </p>
            <p>
              Okay, now what... um... lets. er... oh I know. scroll down a bit
              more.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          <MDBCol lg="5" className="hidden-sm-down text-center text-lg-left">
            <img
              src={DA}
              alt="Dark Angels Space Marine Veteran copyright Games-Workshop plc"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow>
              <MDBCol size="10" md="12" xl="10">
                <h5 className="font-weight-bold mb-3 w-responsive">
                  Personality (or lack off)
                </h5>
                <p>
                  Now those of you who are viewing this on a mobile phone before
                  using a tablet or pc.... nice phone. If your viewing this on a
                  pc / desktop / laptop then you can probably see the mahosive
                  (its a word) Space Marine. I believe its whats referred to as
                  declaring if you have any addictions... Yes I do. Its called
                  Warhammer 40K.
                </p>
                <p>
                  Seriously its my main hobby apart from Gaming{' '}
                  <MDBIcon fab icon="playstation" /> and{' '}
                  <MDBIcon fab icon="desktop" /> which eats a lot of the time.
                  spare time that is and spending time with my family (3
                  boys(18,13,8 at time of creation, the site not them) and a
                  lovely wife)
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Intro;
