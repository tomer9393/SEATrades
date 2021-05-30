import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <Link to="/">
                    <img src="img/footer-logo2.png" alt="" />
                  </Link>
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
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                      <Link to="#">
                        <i className="fa fa-instagram" />
                      </Link>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6">
              <div className="footer__widget">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Sign In</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/HowItWorks">How it Works</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact Us</Link>
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
                  <Link to="#">Terms</Link>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Cookie Policy</Link>
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
