import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {
  MTASF,
  MTABadge,
  educationData,
  imgUrl,
} from '../../../constants/index';
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
            <blockquote className='blockquote bq-primary'>
              <MDBIcon icon='graduation-cap' className='funky-font mr-2' />
              Education
            </blockquote>
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
                {data.Education &&
                  data.Education.length > 0 &&
                  data.Education.map((education) => {
                    return (
                      <div key={education.id} className='d-flex mt-3 pl-0'>
                        <div className='me-4'>
                          {education.institutionLogo !== null ? (
                            <img
                              src={education.institutionLogo}
                              alt={education.institutionName}
                              className='bg-w'
                              style={{ width: '80px', height: '80px' }}
                            />
                          ) : (
                            <div className='bg-w p-2'>
                              <MDBIcon
                                icon='school'
                                size='4x'
                                className='funky-font z-depth-1 px-2 py-3'
                              />
                            </div>
                          )}
                        </div>
                        <div className='flex-grow-1'>
                          <h5>{education.institutionName}</h5>
                          <p className='mb-1'>
                            Course of study - {education.courseStudied}
                          </p>
                          <p className='mb-1'>
                            Grade Achieved - {education.gradeAchieved}
                          </p>
                          <p className='mb-1'>
                            Year of completion - {education.yearCompleted}
                          </p>
                        </div>
                      </div>
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
                  src={imgUrl + MTABadge}
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
