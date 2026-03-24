import React, { useEffect, useState } from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
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
      <section id='rig' className='bg-w'>
        <MDBContainer>
          <MDBRow className='mt-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon fab icon='studiovinari' className='funky-font mr-2' />{' '}
                PC / Rig
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-5'>
            <MDBCol size={12}>
              <p>
                Well this is my current PC set up, that is used for Development
                / Gaming / Media Share.
              </p>
            </MDBCol>
            {data.PC &&
              data.PC.length > 0 &&
              data.PC.map((pc) => {
                return (
                  <MDBCol key={pc.case} sm={12} lg={6}>
                    <div className='mt-3 pl-0 pr-2'>
                      <MDBRow>
                        <MDBCol sm={12} lg={6}>
                          <div>
                            <h5 className='mb-2'>The RIG</h5>
                            <ul className='list-unstyled'>
                              <li>Case:</li>
                              <li>{pc.case}</li>
                              <li>Motherboard:</li>
                              <li> {pc.motherboard}</li>
                              <li>Processor:</li>
                              <li> {pc.processor}</li>
                              <li>Ram:</li>
                              <li> {pc.ram}</li>
                              <li>Graphics Card:</li>
                              <li> {pc.graphics}</li>
                              <li>Power Supply:</li>
                              <li>{pc.psu}</li>
                              <li>Processor Cooling:</li>
                              <li>{pc.cooling}</li>
                              <li>System Cooling:</li>
                              <li>{pc.fans}</li>
                              <li>System Storage Primary:</li>
                              <li>{pc.storagePrimary}</li>
                              <li>System Storage Secondary:</li>
                              <li>{pc.storageSecondary}</li>
                              <li>System Storage Tertiary:</li>
                              <li>{pc.storageTertiary}</li>
                            </ul>
                          </div>
                        </MDBCol>
                        <MDBCol sm={12} lg={6}>
                          <div>
                            <h5 className='mb-2'>Peripherals</h5>
                            <ul className='list-unstyled'>
                              <li>Keyboard:</li>
                              <li>{pc.keyboard}</li>
                              <li>Mouse:</li>
                              <li>{pc.mouse}</li>
                              <li>Monitor:</li>
                              <li>{pc.monitor}</li>
                            </ul>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBCol>
                );
              })}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default PC;
