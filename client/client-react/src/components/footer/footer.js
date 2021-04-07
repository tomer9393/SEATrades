import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="/">
                    <img src="img/footer-logo.png" alt="" />
                  </a>
                </div>
                <p>
                Helping you book an event ticket in a safe way.
                And if your plans have changed, just trade your seat!
                </p>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 col-md-6">
              <div className="footer__address">
                <ul>
                  <li>
                    <span>Call Us:</span>
                    <p>(+972)-52-537-666</p>
                  </li>
                  <li>
                    <span>Email:</span>
                    <p>contact@seatrades.com</p>
                  </li>
                  <li>
                    <span>Fax:</span>
                    <p>(+972)-3-963-4001</p>
                  </li>
                  <li>
                    <span>Connect Us:</span>
                    <div className="footer__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6">
              <div className="footer__widget">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/HowItWorks">How it Works</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    {}
                    Copyright © All rights reserved to SEATrades
                    {}
                  </p>
                </div>
                <div className="footer__copyright__links">
                  <a href="#">Terms</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
