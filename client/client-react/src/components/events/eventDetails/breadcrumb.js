import React from "react";
//import { useParams } from "react-router-dom";
//import { getEventsByName } from "../../../api/EventAPI";
import { format } from "date-fns";

function Breadcrumb(props) {
  const event = props.event;
  //var bg = event.imgUrl;
  var bg = event.imgUrl;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  //const { name } = useParams();
    return (
    <>
    <div className="blog-details-hero set-bg" style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="blog__hero__text">
                        <h2>{event.name}</h2>
                        <ul>
                            <li><i className="fa fa-clock-o"></i>{formattedDate}</li>
                            <li><i className="fa fa-user"></i> {event.artist}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
    );
  }

export default Breadcrumb;
