import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBMedia,
  MDBIcon,
} from 'mdbreact';
import { downtimeGaming } from './game.json';

const Gaming = () => {
  const gaming = downtimeGaming;

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
        {gaming.map((gaming, i) => {
          return (
            <>
              <MDBCol sm={12} md={6}>
                <MDBMedia key={i} className='mt-3 pl-0 pr-2'>
                  <MDBMedia
                    className='rounded-circle mr-4'
                    object
                    src={gaming.gamingAvatar}
                    alt={gaming.gamingTAG}
                  />
                  <MDBMedia body>
                    <MDBMedia heading>
                      {gaming.gamingSource} - {gaming.gamingTAG}
                    </MDBMedia>
                    <p>Most commonly played games</p>
                    <MDBListGroup>
                      {gaming.usualGames
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(games => {
                          return (
                            <MDBListGroupItem key={games}>
                              {games.name}
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
