import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

function Breadcrumb() {
    return (
      <>
      <div className="breadcrumb-area set-bg"  style={{backgroundImage: 'url(/img/breadcrumb/breadcrumb-profile.jpg)'}}>
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 style={{textShadow: '2px 1px #000000'}}>My Seat Trades</h2>
            </div>
            <div className="breadcrumb__option">
              <Link to="/"><i className="fa fa-home"></i> Home</Link>
              <Link to="/Profile"><i ></i> My Profile</Link>
              <span>My Seat Trades</span>
          </div>
        </div>
        </div>
      </div>
  </>
    );
  }

export default Breadcrumb;
