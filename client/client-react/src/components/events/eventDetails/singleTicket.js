import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState, useContext } from "react";

function singleTicket(props) {
  //const ticket = props.ticket;
  const section=props.section
  const row=props.row 
  const seat=props.seat
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");

    return (
      <>
          <article className="tickets_card">
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