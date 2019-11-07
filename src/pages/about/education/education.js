import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from 'mdbreact';
import data from '../../../../src/data';

const Education = () => {
  const education = data.Education;

  return (
    <section id="education" className="py-5">
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol sm="12">
            <h5 className="font-weight-bold my-3 w-responsive">
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
          <MDBCol lg="7">
            <MDBRow>
              <MDBCol size="12" md="12" xl="12">
                {education.map((education, i) => {
                  return (
                    <MDBMedia key={i} list className="mt-3">
                      <MDBMedia tag="li">
                        <MDBMedia left middle href="#">
                          <MDBMedia
                            object
                            src={education.institutionLogo}
                            alt={education.institutionName}
                          />
                        </MDBMedia>
                        <MDBMedia body>
                          <MDBMedia heading>
                            {education.institutionName}
                          </MDBMedia>
                          <p className="mb-1">
                            Course of study - {education.courseStudied}
                          </p>
                          <p className="mb-1">
                            Grade Achieved - {education.gradeAchieved}
                          </p>
                          <p className="mb-1">
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
          <MDBCol lg="5"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Education;
