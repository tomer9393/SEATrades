import React from "react";
import { useParams } from "react-router-dom";

function Breadcrumb(props) {
  const event = props.event;
  var bg = props.bg;
  //var category = event.category;
  const { name } = useParams();
    return (
      <>
      <div className="breadcrumb-area set-bg"  data-setbg="/img/breadcrumb/breadcrumb-profile.jpg">
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 style={{textShadow: '2px 1px #000000'}}>My Tickets</h2>
            </div>
            <div className="breadcrumb__option">
              <a href="/"><i className="fa fa-home"></i> Home</a>
              <a href="/Profile"><i ></i> My Profile</a>
              <span>My Tickets</span>
          </div>
        </div>
        </div>
      </div>
  </>
    );
  }

export default Breadcrumb;
