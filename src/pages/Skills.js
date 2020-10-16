import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">My skills</div>
        <div className="skills-detail">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-html5" />
                </div>
                <div className="skills-description">
                  <p>HTML5</p>
                  <p>
                    HTML5 is a markup language used for structuring and
                    presenting content on the World Wide Web. It is the fifth
                    and latest major version of HTML that is a World Wide Web
                    Consortium (W3C) recommendation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-css3" />
                </div>
                <div className="skills-description">
                  <p>CSS3</p>
                  <p>
                    Cascading Style Sheets (CSS) is a style sheet language used
                    for describing the presentation of a document written in a
                    markup language such as HTML. CSS is a technology of the
                    World Wide Web
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-code" />
                </div>
                <div className="skills-description">
                  <p>Javascript</p>
                  <p>
                    Alongside HTML and CSS, JavaScript is one of the core
                    technologies of the World Wide Web. JavaScript enables
                    interactive web pages and is an essential part of web
                    applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-database" />
                </div>
                <div className="skills-description">
                  <p>Database Engineer</p>
                  <p>
                    Database engineers, who may work as either applications or
                    systems software developers, are generally employed by
                    computer systems companies to design and monitor complex
                    databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-desktop" />
                </div>
                <div className="skills-description">
                  <p>Web Designer</p>
                  <p>
                    Web designer or web designer is a profession run by people
                    whose job is to design a website. This design can later be
                    opened and enjoyed on a monitor screen either via a
                    computer, cellphone, or tablet
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="skills-selection">
                <div className="skills-icon">
                  <i className="fa fa-mobile" />
                </div>
                <div className="skills-description">
                  <p>Responsive Design</p>
                  <p>
                    Responsive web design (RWD) is makes web pages render well
                    on a variety of devices and screen sizes. Content and design
                    are necessary across all devices to ensure usability and
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
