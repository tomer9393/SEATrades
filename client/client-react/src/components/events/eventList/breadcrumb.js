import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
//import { getEventsByName } from "../../../api/EventAPI";
//import { format } from "date-fns";

function Breadcrumb(props) {
  const event = props.event;
  var bg = props.bg;
  //var category = event.category;
  const { name } = useParams();
    return (
      <>
      <div className="breadcrumb-area set-bg"  style={{backgroundImage: `url(/img/hero/bg-homepage.jpg)`}}>
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 >{name}</h2>
            </div>
            <div className="breadcrumb__option">
              <Link to="/"><i className="fa fa-home"></i> Home</Link>
              <Link to={'/Category/' + event.category}><i ></i> {event.category}</Link>
              <span>{name}</span>
          </div>
        </div>
        </div>
      </div>
  </>
    );
  }

export default Breadcrumb;
