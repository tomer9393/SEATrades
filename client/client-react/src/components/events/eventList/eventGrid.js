import React from "react";
import { format } from "date-fns";
import {Link} from "react-router-dom";

function eventGrid(props) {
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  var ticketsAvailable = (event.totalTickets - event.soldTickets)
    return (
      <>
      <div className="event-grids">
        <div className="col-md-3 event-grid">
          <div className="pic"> </div>
          <ul>
            <li className="hedding">{formattedDate}</li>
          </ul>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-4 event-grid large-text">
           <p >
            location: {event.location}
          </p>
        </div>
        <div className="col-md-2 event-grid large-text">
          <p className="text">Starting price at: ₪{event.minPrice}</p>
        </div>
        <div className="col-md-3 event-grid text-button">
          <ul>
            <li className="num">{ticketsAvailable} tickets Available</li>
            <Link to={`/EventDetails/${event._id}`}>
            <li className="button yellow">
              <a>Buy Ticket</a>
            </li>
            </Link>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
    );
  }

export default eventGrid;
