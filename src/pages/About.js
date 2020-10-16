import React from 'react';

function About() {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-us-img">
              <img
                src="assets/img/profile.jpg"
                alt="About Me"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-us-text">
              <div className="about-us-title">
                <p>About Me</p>
                <p>Frontend Developer</p>
              </div>
              <div className="about-us-description">
                <p>
                  I am Febrian Aji Pangestu, Bachelor of Computer Science. As an
                  IT Student, I love exploring new technologies and often amazed
                  by the progress we as a human species have made so far in the
                  few years. I learn very much about code and trying to
                  implement it to a website.
                </p>
              </div>
              <div className="row about-us-information">
                <div className="col-lg-6 col-md-6">
                  <div className="about-us-information-detail">
                    <i className="fa fa-user-o" />
                    <p>Name:</p>
                    <p>Febrian Aji Pangestu</p>
                  </div>
                  <div className="about-us-information-detail">
                    <i className="fa fa-envelope-o" />
                    <p>Email:</p>
                    <p>febrinim99065@gmail.com</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-us-information-detail">
                    <i className="fa fa-calendar" />
                    <p>Date of Birth:</p>
                    <p>06 Februari 1998</p>
                  </div>
                  <div className="about-us-information-detail">
                    <i className="fa fa-map-o" />
                    <p>Location:</p>
                    <p>Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
              <div className="about-us-information-cta">
                <a href="github.com">Download CV</a>
                <a href="linkedin.com">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
