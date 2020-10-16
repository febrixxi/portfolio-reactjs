import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">Contact Us</div>
        <div className="contact-detail">
          <form>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message Subject"
                  required=""
                />
                <textarea className="form-control" placeholder="Your Message" />
              </div>
              <div className="col-md-12 text-center">
                <input
                  type="submit"
                  className="btn send-contact"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
