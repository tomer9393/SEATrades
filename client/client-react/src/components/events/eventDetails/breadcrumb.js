import React from "react";
//import { useParams } from "react-router-dom";
//import { getEventsByName } from "../../../api/EventAPI";
import { format } from "date-fns";

function Breadcrumb(props) {
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");

    return (
    <>
    <div className="blog-details-hero set-bg" style={{backgroundImage: `url(/img/hero/bg-homePage.jpg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="blog__hero__text">
                        <h2>{event.name}</h2>
                        <ul>
                            <li><i className="fa fa-user"></i> {event.artist}</li>
                            <li><i className="fa fa-calendar"></i>{formattedDate}</li>
                            <li><i className="fa fa-clock-o"></i>20:30</li>
                            <li><i className="fa fa-location-arrow"></i> {event.location}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
              <div className="event_details_item">
                <img src={event.imgUrl} alt="" />
              </div>
            </div>
            </div>
        </div>
    </div>
  </>
    );
  }

export default Breadcrumb;
