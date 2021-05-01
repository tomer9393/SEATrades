import React from "react";
import { useParams } from "react-router-dom";

function Breadcrumb(props) {
  const event = props.event;
  var bg = event.imgUrl;
  const { name } = useParams();
    return (
      <>
      <div className="breadcrumb-area set-bg"  style={{backgroundImage: `url(${bg})`}}>
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2>{name}</h2>
            </div>
        </div>
        </div>
      </div>
  </>
    );
  }

export default Breadcrumb;
