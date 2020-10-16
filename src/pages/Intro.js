import React from 'react';

function Intro() {
  return (
    <section id="intro-area">
      <div className="container">
        <div className="caption-intro">
          <h4>Welcome to my CV Website</h4>
          <h1>Frontend Developer</h1>
          <div className="social-intro">
            <ul>
              <li>
                <a href="fb.com" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="twitter.com" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="linkedin.com" target="_blank">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="github.com" target="_blank">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="instagram.com" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="cta-intro">
            <a href="#footer">Contact Now!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
