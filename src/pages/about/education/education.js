import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia, MDBIcon } from 'mdbreact';
import { MTASF, MTABadge, educationData } from '../../../constants/index';
import axiosConfig from '../../../axiosConfig';

const Education = () => {
  const [data, setEducation] = useState({ Education: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig(educationData);
      setEducation(res.data);
    };
    fetchData();
  }, []);

  return (
    <section id='education' className='py-5 bg-g'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol sm={12}>
            <h5 className='font-weight-bold my-3 w-responsive'>
              Education - yes I have had some
            </h5>
            <p>
              Ok so here we have my formal education cert and results.
              Informally i am learning all the time via pluralsight and various
              other forms of media(YouTube, books etc). Most recently I have
              been learning React, which is wonderful I have to admit, so much
              so that this site is built using react. It will get better as I
              learn more about React(hooks, Redux, and other magical things)
            </p>
          </MDBCol>
          <MDBCol lg={7}>
            <MDBRow>
              <MDBCol size={12} md={12} xl={12}>
                {data.Education.map(education => {
                  return (
                    <MDBMedia key={education.id} list className='mt-3 pl-0'>
                      <MDBMedia tag='li'>
                        <MDBMedia left middle href='#'>
                          {education.institutionLogo !== null ? (
                            <MDBMedia
                              object
                              src={education.institutionLogo}
                              alt={education.institutionName}
                              className='bg-w'
                            />
                          ) : (
                            <MDBMedia className='bg-w'>
                              <MDBIcon
                                icon='school'
                                size='4x'
                                className='funky-font z-depth-1 px-2 py-3'
                              />
                            </MDBMedia>
                          )}
                        </MDBMedia>
                        <MDBMedia body>
                          <MDBMedia heading>
                            {education.institutionName}
                          </MDBMedia>
                          <p className='mb-1'>
                            Course of study - {education.courseStudied}
                          </p>
                          <p className='mb-1'>
                            Grade Achieved - {education.gradeAchieved}
                          </p>
                          <p className='mb-1'>
                            Year of completion - {education.yearCompleted}
                          </p>
                        </MDBMedia>
                      </MDBMedia>
                    </MDBMedia>
                  );
                })}
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg={5}>
            <MDBCol>
              <h4 className='my-3 w-responsive'>Certifications</h4>
              <a href={MTASF}>
                <img
                  className='mx-auto d-block pop'
                  alt='Microsoft Technology Associate Software Fundamentals Badge - 2018'
                  src={MTABadge}
                />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Education;
