import React, { useEffect, useState } from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBMedia, MDBContainer } from 'mdbreact';
import {
  GWplc,
  copyrightGW,
  miniaturesData,
} from '../../../../constants/index.js';
import axiosConfig from '../../../../axiosConfig';

const Miniatures = () => {
  const [data, setData] = useState({ MINIS: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig(miniaturesData);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='bg-g' id='miniatures'>
        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon fab icon='studiovinari' className='funky-font mr-2' />{' '}
                Miniatures
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow className='pb-5'>
            <MDBCol size={12}>
              <h3 className='mb-4 text-center'>A long time ago...</h3>
              <p className='mb-5 text-center'>mistakes were made</p>

              <img
                src={GWplc}
                alt={copyrightGW}
                className='mx-auto d-block my-4'
              />

              <p>
                yup thats right, plastic crack. It is beyond normal
                comprehension how much I have spent on miniatures. Not to
                mention how many I have built (and not painted... shhhhh we
                don&apos;t talk about that) and lost from moving / travelling.
              </p>
              <p>
                I mean Its a mark of strength and willpower in this hobby being
                able to walk out of the warhammer/model shop with exactly what I
                went in for or nothing at all (not technically possible but we
                can dream).
              </p>
              <p>
                Now your wondering what mayhem can it really cause. Lots... as
                your about to see. its only a snippet of my collection
              </p>
            </MDBCol>
            {data.MINIS.map((model) => {
              return (
                <MDBCol key={model.id} sm={12} md={6}>
                  <MDBMedia className='mt-3 pl-0 pr-2'>
                    <MDBMedia
                      className='rounded mr-4'
                      object
                      src={model.miniLogo}
                      alt={model.logoCopyright ? model.logoCopyright : ''}
                    />
                    <MDBMedia body>
                      <MDBMedia heading>{model.miniUniverse}</MDBMedia>
                    </MDBMedia>
                  </MDBMedia>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Miniatures;
