import React from 'react';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-title">Education</div>
        <div className="education-detail">
          <div className="row">
            <div className="col-md-10">
              <div className="education-desc">
                <h3>High School</h3>
                <h4 className="instance">SMAN 1 Dayeuhkolot</h4>
                <p>
                  Attended SMAN 1 Dayeuhkolot for 3 years and entered the
                  science department. Participated in scout extracurricular
                  activities for 2 years and won various competitions
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="education-time">
                <p className="time">07/2013 - 07/2016</p>
              </div>
            </div>
            <div className="col-md-10">
              <div className="education-desc">
                <h3>Informatics Engineering</h3>
                <h4 className="instance">Telkom University</h4>
                <p>
                  Studying Informatics majoring in Telkom University and earning
                  a Bachelor degree in 4 years. Become a member High Performance
                  Computing Laboratory and practicum assistant in Database
                  Modelling.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="education-time">
                <p className="time">08/2016 - 09/2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
