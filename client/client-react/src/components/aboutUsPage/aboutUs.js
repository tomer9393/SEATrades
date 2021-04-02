import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="about__title">
                <h2>
                  Welcome to
                  <br /> SeaTrades!
                </h2>
                <a href="#" className="primary-btn">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="about__text">
                <h5>
                  Metasurfaces are generally designed by placing scatterers in
                  periodic or pseudo-periodic grids.
                </h5>
                <p>
                  You have finished building your own website. You have
                  introduced your company and presented your products and
                  services. You have added propositions and promos to catch your
                  target audience’s attention. You think you are doing
                  everything “right”, but all your promotions have failed to
                  produce growth in your new internet business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
