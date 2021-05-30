import React from "react";
import {Link} from "react-router-dom";

function Breadcrumb() {
    return (
      <>
      <div className="breadcrumb-area set-bg" style={{backgroundImage: `url(/img/hero/bg-homepage.jpg)`}}>
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 >Search Results</h2>
            </div>
            <div className="breadcrumb__option">
              <Link to="/"><i className="fa fa-home"></i> Home</Link>
              <span>Search Results</span>
          </div>
        </div>
      </div>
  </div>
  </>
    );
  }

export default Breadcrumb;
