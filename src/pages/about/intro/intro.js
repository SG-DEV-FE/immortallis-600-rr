import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { SGLinkedIn, Gravatar, DA } from '../../../constants/index';

const Intro = () => {
  return (
    <section id="personality" className="py-5">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <div className="avatar mx-auto text-center mb-2">
              <a href={SGLinkedIn} target="_blank" rel="noopener noreferrer">
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
              className="img-fluid"
              src={DA}
              alt="Dark Angels Space Marine Veteran copyright Games-Workshop plc"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow>
              <MDBCol size="12" md="12" xl="10" className="px-3">
                <h5 className="font-weight-bold mb-3 w-responsive">
                  Personality (or lack off)
                </h5>
                <p>
                  Now those of you who are viewing this on a mobile phone before
                  using a tablet or pc.... nice phone. If your viewing this on a
                  pc / desktop / laptop then you can probably see the mahoosive
                  (its a word) Space Marine. I believe it is what's referred to
                  as declaring if you have any addictions... Yes I do. Its
                  called Warhammer 40K.
                </p>
                <p>
                  Seriously its my main hobby apart from Gaming{' '}
                  <MDBIcon fab icon="playstation" /> and{' '}
                  <MDBIcon icon="desktop" />, look at them pretty icons. So
                  gaming is a big part of who I am. I have been gaming since the
                  days of the Atari 2600 (centipede was my go to game). Now its
                  mostly PlayStation 4 or my PC. Gamertags can be found further
                  down the page if you're interested in checking me out. Awesome
                  gaming fact I have been credited on the BAFTA winning game
                  Tearaway for the PlayStation Vita.
                </p>
                <p>
                  Motorcycling is a big part off my life also, I commute all
                  year round on a Honda CBR 600 rr (repsol paint). All weather,
                  yes even snow (which even I admit can be pushing my luck, if
                  it is very heavy obviously gonna use public transport). I love
                  the TT in the Isle of Man and wish I could go there more often
                  as it feels very much a home from home.
                </p>
                <p>
                  I was going to mention my family of 3 boys and the wife but
                  not fair to place them on here so we'll skip them for now.
                </p>
                <p></p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Intro;
