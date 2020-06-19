import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBMedia,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';
import axiosConfig from '../../../../axiosConfig';
import { gamingData } from '../../../../constants/index';

const Gaming = () => {
  const [data, setGames] = useState({ downtimeGaming: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosConfig(gamingData);
      setGames(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='bg-w' id='gaming'>
        <MDBContainer>
          <MDBRow className='mt-5'>
            <MDBCol>
              <blockquote className='blockquote bq-primary'>
                <MDBIcon icon='gamepad' className='funky-font mr-2' /> Gaming
              </blockquote>
              <p>
                {
                  'Below are my gamin tags and a list of games that will be updated frequently or when I rememeber. I have also used GOG to track roughly my addiction. This does not include hours on playstation or xbox games, the hours are tracked pc gaming not including Battle.net (which is ridiculous when I viewed them).'
                }
              </p>
              <div className='py-4'>
                <img
                  src='https://res.cloudinary.com/stegault/image/upload/c_scale,h_300,f_auto,q_auto:eco/v1592567147/game-stats_hwnh4x.jpg'
                  className=' img-fluid mx-auto d-block z-depth-1-half'
                  alt='gaming addict'
                />
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow className='mb-5'>
            {data.downtimeGaming.map((games) => {
              return (
                <>
                  <MDBCol key={games.id} sm={12} md={6} className='pt-4 '>
                    <MDBMedia className='mt-3 pl-0 pr-2'>
                      <MDBMedia
                        className='rounded-circle mr-4'
                        object
                        src={games.gamingAvatar}
                        alt={games.gamingTAG}
                      />
                      <MDBMedia body>
                        <MDBMedia heading>
                          {games.gamingSource} - {games.gamingTAG}
                        </MDBMedia>
                        <p>Most commonly played games</p>
                        <MDBListGroup>
                          {games.usualGames
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((gamesList) => {
                              return (
                                <MDBListGroupItem key={gamesList.name}>
                                  {gamesList.name}
                                </MDBListGroupItem>
                              );
                            })}
                        </MDBListGroup>
                      </MDBMedia>
                    </MDBMedia>
                  </MDBCol>
                </>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Gaming;
