import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState, useContext } from "react";
import Popup from '../tradePage/Popup';


function singleTicket(props) {
  const ticket = props.ticket;
  const event = props.ticket.event;
  const happened = props.happened;
  const forTrade = ticket.forTrade;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");

  if (happened==false){
  return (
      <>
          <article className="tickets_card">
          {
          forTrade==true
          ? <div className="forTrade_top"> <a>MARKED FOR TRADE</a></div>
          : <div></div>
          }
          <section className="tickets_seat">
              <section>
                <ul>
                <li>section:</li>
                <li className="section">{ticket.section}</li>
                <li>row: {ticket.row}</li>
                <li>seat: {ticket.seat}</li>
                </ul>
              </section>
            </section>
            <section className="tickets_card-cont">
            <h2>{event.name}</h2>
            <section className="tickets_card-list">
                <ul>
                <li ><i className="fa fa-calendar" /><span>{formattedDate}</span></li>
                <li><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
                <li><i className="fa fa-map-marker" /><span>{event.location}</span></li>
                </ul>
            </section>
            <div className="trade_tickets_card"><a to="#" className="trade_tickets_card" style={{background: '#00fd00'}}>Accept</a><a to="#" className="trade_tickets_card" style={{background: '#fa0b0b'}}>Deny</a></div>
            <div></div> 
            {/* <Buttons></Buttons> */}
            </section>
            {/* <section className="tickets_card-cont">
            <h5>DICLAIMER:</h5>
            <section className="disclaimer">
              <p>This ticket can be purchased only on SEATRADES and is valid only with SEATRADES event-id.</p>
              </section>
            </section> */}
          </article>
    </>
    )
  }
  return (
    <>
    <article className="tickets_card" style={{backgroundColor: '#797979'}}>
    <section className="tickets_seat">
              <section>
                <ul>
                <li>section:</li>
                <li className="section">{ticket.section}</li>
                <li>row: {ticket.row}</li>
                <li>seat: {ticket.seat}</li>
                </ul>
              </section>
            </section>
      <section className="tickets_card-cont">
      <h2>{event.name}</h2>
      <section className="tickets_card-list">
          <ul>
          <li ><i className="fa fa-calendar" /><span>{formattedDate}</span></li>
          <li><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
          <li><i className="fa fa-map-marker" /><span>{event.location}</span></li>
          </ul>
      </section>
      </section>
    </article>
    </>
    )
}

export default singleTicket;