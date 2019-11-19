import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBCard } from 'mdbreact';

const Miniatures = () => {
  return (
    <>
      <MDBRow id='miniatures'>
        <MDBCol>
          <blockquote className='blockquote bq-primary'>
            <MDBIcon fab icon='studiovinari' className='funky-font mr-2' />{' '}
            Gaming
          </blockquote>
        </MDBCol>
      </MDBRow>
      ;
      <MDBRow>
        <p>
          Right this is the afore mentioned hobby that is a true addiction. I
          mean its a mark of strength walking out of the model shop with exactly
          what I went in for or nothing at all (not technically possible).
        </p>
      </MDBRow>
    </>
  );
};

export default Miniatures;
