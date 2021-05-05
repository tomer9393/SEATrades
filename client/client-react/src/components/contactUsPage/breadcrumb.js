import React from "react";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-area set-bg2" data-setbg="img/breadcrumb/breadcrumb-contact-us.jpg">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                      <h2>Contact Us</h2>
                      <div className="breadcrumb__option">
                          <a href="/"><i className="fa fa-home"></i> Home</a>
                          <span>Contact Us</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Breadcrumb;
