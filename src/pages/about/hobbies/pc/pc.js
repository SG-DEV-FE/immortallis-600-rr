import React, { useEffect, useState } from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBMedia } from 'mdbreact';
import { pcData } from '../../../../constants/index.js';
import axiosConfig from '../../../../axiosConfig';

const PC = () => {
  const [data, setComp] = useState({ PC: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig(pcData);
      setComp(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <MDBRow id='rig' className='mt-5'>
        <MDBCol>
          <blockquote className='blockquote bq-primary'>
            <MDBIcon fab icon='studiovinari' className='funky-font mr-2' /> PC /
            Rig
          </blockquote>
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-5'>
        <MDBCol size={12}>
          <p>
            Now your wondering what mayhem can it really cause. Lots... as your
            about to see. its only a snippet of my collection
          </p>
        </MDBCol>
        {data.PC.map(pc => {
          return (
            <>
              <MDBCol sm={12} md={6}>
                <MDBMedia key={pc.case} className='mt-3 pl-0 pr-2'>
                  <MDBMedia className='rounded mr-4' object />
                  <MDBMedia body>
                    <MDBMedia heading></MDBMedia>
                  </MDBMedia>
                </MDBMedia>
              </MDBCol>
            </>
          );
        })}
      </MDBRow>
    </>
  );
};

export default PC;
