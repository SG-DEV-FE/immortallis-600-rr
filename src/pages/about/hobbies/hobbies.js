import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Gaming from './gaming/gaming';
import Miniatures from './minis/miniatures';
import PC from './pc/pc';

const Hobbies = () => {
  return (
    <>
      <section id='hobbies' className='py-5'>
        <MDBContainer>
          <MDBRow className='mb-3'>
            <MDBCol sm={12}>
              <h5 className='font-weight-bold my-3 w-responsive'>
                Downtime / Hobbies - or how I cling to my sanity
              </h5>
              <p>
                So below is a selection of how I chill the out, this is by far
                not extensive but I think it&apos;ll do for the purposes of
                conveying how much of a Nerd/Geek I am. I agonized for what
                seemed an eon for the best approach to this. I think I will
                start with biggest addiction and feed down from there.
              </p>
              <p>
                Fair warning though this is a big list, so feel free to skip
                this if you want...
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Gaming />
      <Miniatures />
      <PC />
    </>
  );
};

export default Hobbies;
