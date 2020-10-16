import React from 'react';

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-detail">
              <i className="fa fa-volume-control-phone" />
              <p>Phone</p>
              <p>0896 2000 9282</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-detail">
              <i className="fa fa-envelope" />
              <p>Email</p>
              <p>febrinim99065@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-detail">
              <i className="fa fa-map-marker" />
              <p>Address</p>
              <p>Bojongsoang, Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
