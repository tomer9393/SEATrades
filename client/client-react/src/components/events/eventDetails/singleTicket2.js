import React from "react";
import { format } from "date-fns";

function singleTicket(props) {
  const section=props.section
  const row=props.row 
  const seat=props.seat
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");

    return (
      <>
      <div className="event-grids">
        <div className="col-md-3 event-grid">
          <div className="seat_chart_pic"> </div>
          <ul>
            <li className="hedding">{formattedDate}</li>
          </ul>
          <div className="clearfix"> </div>
          </div>
        <div className="col-md-3 event-grid">
        <section className="tickets_seat">
              <section>
                <ul>
                <li>section:</li>
                <li className="section">{section}</li>
                <li>row: {row}</li>
                <li>seat: {seat}</li>
                </ul>
            </section>
            </section>
        <div className="clearfix"> </div>
        </div>
        <div className="col-lg-4 col-md-4 event-grid">
        <ul>
           <li className="large-text-grid" >
           event details:&nbsp;&nbsp;</li>
           <li className="hedding" > {event.name}</li>
           <li className="fa fa-location-arrow" > {event.location}</li>
           <li className="fa fa-calendar" > {formattedDate}</li>
           <li className="fa fa-clock-o" > 20:30</li>
        </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
    )
  }
  

export default singleTicket;