import React from "react";
import { format } from "date-fns";
import {Link} from "react-router-dom";

function eventGrid(props) {
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  var ticketsAvailable = (event.totalTickets - event.soldTickets);
  var soldOut = event.soldOut;

    return (
      <>
      <div className="event-grids">
        <div className="col-md-3 event-grid">
          <div className="event_grid_pic"> </div>
          <ul>
            <li className="hedding">{formattedDate}</li>
          </ul>
          <div className="clearfix"> </div>
          </div>
        <div className="col-md-3 event-grid">
        <ul>
           <li className="hedding" >
           <i className="fa fa-location-arrow"></i> {event.location}
          </li>
        </ul>
        <div className="clearfix"> </div>
        </div>
        <div className="col-md-3 event-grid">
        <ul>
           <li className="large-text-grid" >
           Starting price at:&nbsp;&nbsp;</li>
           <li className="hedding" style={{ color: 'green' }} > ₪{event.minPrice}
          </li>
        </ul>
        <div className="clearfix"> </div>
        </div>
        <div className="col-md-3 event-grid text-button">
          <ul >
          {
          soldOut==true
          ? <li className="button yellow"><Link to="/" className="disabledCursor" onClick={ (e) => e.preventDefault() }>0 tickets Available</Link></li>
          : <li className="button yellow"><Link to={`/EventDetails/${event._id}`} className="notDisabled">{ticketsAvailable} tickets Available</Link></li>
          }
          </ul>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
    );
  }

export default eventGrid;
