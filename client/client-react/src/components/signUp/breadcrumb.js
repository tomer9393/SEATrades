import React from "react";

//const bg = 'url(/img/breadcrumb/breadcrumb-profile.jpg)';

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-area set-bg" data-setbg="/img/breadcrumb/breadcrumb-profile.jpg">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                      <h2>Sign Up</h2>
                      <div className="breadcrumb__option">
                          <a href="/"><i className="fa fa-home"></i> Home</a>
                          <span>Sign Up</span>
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
