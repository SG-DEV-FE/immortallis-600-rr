import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBView } from 'mdbreact';
import { SGLinkedIn, SGCloudinary, DA, imgUrl } from '../../../constants/index';

const Intro = () => {
  return (
    <section id='personality' className='py-5'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol sm={12}>
            <div className='avatar mx-auto text-center mb-2'>
              <a href={SGLinkedIn} target='_blank' rel='noopener noreferrer'>
                <img
                  src={imgUrl + SGCloudinary}
                  alt='Stephen Gault - Software Developer / Graphic Design'
                  className='rounded-circle img-fluid z-depth-3'
                />
              </a>
            </div>
          </MDBCol>
          <MDBCol sm={12}>
            <div className='h-100vh w-100'>
              <h3 className='lead text-center h3-responsive mx-auto mt-3'>
                Welcome Ladies & Gents / Orruks & Duardin / Cats & Dogs, you get
                the picture.
              </h3>
              <p className='text-center mx-auto mb-5 w-responsive'>
                {
                  "This is me (song's in your head now). I built this little old site to showcase my skills and generally show off some of my personality, that as you have no doubt already surmised is on the dry wit side..."
                }
                <br />
                Also its a work in progress so its rough around the edges, like
                all good personal projects are...ahem
              </p>
              <p className='text-center mx-auto mb-5 w-responsive'>
                Call it an informal cv if you want.
                <br />
                Okay, now what... um... lets. er... oh I know. scroll down a bit
                more.
              </p>
            </div>
          </MDBCol>

          <MDBCol sm={12}>
            <div className='h-100vh w-100'>
              <MDBView hover zoom>
                <img
                  src='https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1591012741/ntsh_frmtxf.png'
                  className='rounded img-fluid mx-auto d-block z-depth-1-half'
                  alt='keep going'
                />
              </MDBView>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mb-3'>
          <MDBCol lg={12}>
            <blockquote className='blockquote bq-primary'>
              <MDBIcon icon='user' className='funky-font mr-2' /> Personality
              (or lack of)
            </blockquote>
          </MDBCol>
          <MDBCol lg={5} className='hidden-sm-down text-center text-lg-left'>
            <img
              className='img-fluid'
              src={imgUrl + DA}
              alt='Dark Angels Space Marine Veteran copyright Games-Workshop plc'
            />
          </MDBCol>
          <MDBCol lg={7}>
            <MDBCol size={12} md={12} xl={10} className='px-3'>
              <p>
                {
                  "Now those of you who are viewing this on a mobile phone before using a tablet or pc.... nice phone. If your viewing this on a pc / desktop / laptop then you can probably see the mahoosive (its a word) Space Marine. I believe it is what's referred to as declaring if you have any addictions... Yes I do. Its called Warhammer 40K."
                }
              </p>
              <p>
                Seriously its my main hobby apart from Gaming{' '}
                <MDBIcon fab icon='playstation' /> and{' '}
                <MDBIcon icon='desktop' />,{' '}
                {
                  "look at them pretty icons. So gaming is a big part of who I am. I have been gaming since the days of the Atari 2600 (centipede was my go to game). Now its mostly PlayStation 4 or my PC. Gamertags can be found further down the page if you're interested in checking me out. Awesome gaming fact I have been credited on the BAFTA winning game Tearaway for the PlayStation Vita."
                }
              </p>
              <p>
                Motorcycling is a big part off my life also, I used to commute all year
                round on a Honda CBR 600 rr (repsol paint). All weather, yes
                even snow (which even I admit can be pushing my luck, if it is
                very heavy obviously gonna use public transport). I love the TT
                in the Isle of Man and wish I could go there more often as it
                feels very much a home from home. Hoping to eventually own a BMW S1000RR.
              </p>
              <p>
                {
                  "I was going to mention my family of 3 boys and the wife but not fair to place them on here so we'll skip them for now."
                }
              </p>
               <h2>
                {
                  "Now at the moment I am rebuilding and planning a new design for this site. so if you would like to getin touch or request my CV please feel free to use the form Below"
                }
              </h2>
              <p></p>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Intro;
