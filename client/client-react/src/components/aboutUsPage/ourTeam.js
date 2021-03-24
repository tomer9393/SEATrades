import React from "react";
// import moment from "moment";
// import {Link} from "react-router-dom";

class OurTeam extends React.Component {
  render() {
    return (
      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Specialist Team</h2>
                <p>
                  Travelocity empowers travelers who are giving back on their
                  trips in ways big and small
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Lee.jpg" alt />
                <span>DEVELOPER</span>
                <h5>Lee Liskar</h5>
                <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Liraz.jpg" alt />
                <span>DEVELOPER</span>
                <h5>Liraz Mizrahi</h5>
                <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Tomer.jpg" alt />
                <span>DEVELOPER</span>
                <h5>Tomer Israel</h5>
                <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Meital.jpg" alt />
                <span>DEVELOPER</span>
                <h5>Meital Zaguri</h5>
                <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
