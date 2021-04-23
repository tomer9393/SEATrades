import React from "react";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-area set-bg" data-setbg="img/breadcrumb/shows-1.jpg">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                      <h2>My profile</h2>
                      <div className="breadcrumb__option">
                          <a href="/"><i className="fa fa-home"></i> Home</a>
                          <span>My profile</span>
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
