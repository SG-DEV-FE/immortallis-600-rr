import React, { useEffect, useState } from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBMedia } from 'mdbreact';
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
      <MDBRow id='miniatures' className='mt-5'>
        <MDBCol>
          <blockquote className='blockquote bq-primary'>
            <MDBIcon fab icon='studiovinari' className='funky-font mr-2' />{' '}
            Miniatures
          </blockquote>
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-5'>
        <MDBCol size={12}>
          <h3 className='mb-4 text-center'>A long time ago...</h3>
          <p className='mb-5 text-center'>mistakes were made</p>

          <img src={GWplc} alt={copyrightGW} className='mx-auto d-block my-4' />

          <p>
            yup thats right, plastic crack. its beyond normal comprehension how
            much I have spent on miniatures. Not to mention how many i have
            built and lost from moving and travelling. Doh.
          </p>
          <p>
            I mean its a mark of strength walking out of the warhammer shop with
            exactly what I went in for or nothing at all (not technically
            possible but we can dream).
          </p>
          <p>
            Now your wondering what mayhem can it really cause. Lots... as your
            about to see. its only a snippet of my collection
          </p>
        </MDBCol>
        {data.MINIS.map(model => {
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
    </>
  );
};

export default Miniatures;
