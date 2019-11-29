import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBMedia,
  MDBIcon,
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
      <MDBRow id='gaming' className='mt-5'>
        <MDBCol>
          <blockquote className='blockquote bq-primary'>
            <MDBIcon icon='gamepad' className='funky-font mr-2' /> Gaming
          </blockquote>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-5'>
        {data.downtimeGaming.map(games => {
          return (
            <>
              <MDBCol key={games.id} sm={12} md={6}>
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
                        .map(gamesList => {
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
    </>
  );
};

export default Gaming;
