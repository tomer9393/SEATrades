import React from "react";
import {Link} from "react-router-dom";


class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-area set-bg" style={{backgroundImage: 'url(/img/breadcrumb/breadcrumb-profile.jpg)'}}>
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                      <h2>My Profile</h2>
                      <div className="breadcrumb__option">
                          <Link to="/"><i className="fa fa-home"></i> Home</Link>
                          <span>My Profile</span>
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
