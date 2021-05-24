import React from "react";
//data-setbg="/img/breadcrumb/breadcrumb-about-us.jpg"
class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-area set-bg2" style={{backgroundImage: 'url(/img/breadcrumb/breadcrumb-about-us.jpg)'}}>
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                      <h2>About Us</h2>
                      <div className="breadcrumb__option">
                          <a href="/"><i className="fa fa-home"></i> Home</a>
                          <span>About Us</span>
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
