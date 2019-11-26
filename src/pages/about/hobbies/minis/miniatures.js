import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBCard } from 'mdbreact';

const Miniatures = () => {
  return (
    <>
      <MDBRow id='miniatures'>
        <MDBCol>
          <blockquote className='blockquote bq-primary'>
            <MDBIcon fab icon='studiovinari' className='funky-font mr-2' />{' '}
            Miniatures
          </blockquote>
        </MDBCol>
      </MDBRow>

      <MDBRow className='bg-b'>
        <div className='grim-dark--fade'>
          <MDBContainer className='grim-dark__body hv-100 w-100'>
            <div className='crawl'>
              <h4 className='grim-dark__title mb-4'>A long time ago...</h4>
              <p>mistakes were made</p>
            </div>
            <p>
              Right this is the afore mentioned hobby that is a true addiction.
              I mean its a mark of strength walking out of the model shop with
              exactly what I went in for or nothing at all (not technically
              possible).
            </p>
          </MDBContainer>
        </div>
      </MDBRow>
    </>
  );
};

export default Miniatures;
