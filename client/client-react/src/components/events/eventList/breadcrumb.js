import React from "react";
import { useParams } from "react-router-dom";
//import { getEventsByName } from "../../../api/EventAPI";
//import { format } from "date-fns";

function Breadcrumb(props) {
  //const event = props.event;
  var bg = props.bg;
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
