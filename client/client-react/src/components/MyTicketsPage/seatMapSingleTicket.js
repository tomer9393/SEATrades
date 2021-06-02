import React from "react";
import { format } from "date-fns";

function singleTicket(props) {
  const chosenTicket = props.chosenTicket;
  const chosenEvent = chosenTicket.event;
  var chosenDate = new Date(chosenEvent.date);
  var chosenFormattedDate = format(chosenDate, "dd/MM/yyyy");

    return (
      <>
       <article className="tickets_card">
          <section className="tickets_seat" style={{width: '200px'}}>
              <section>
                <ul>
                <li>section:</li>
                <li className="section">{chosenTicket.section}</li>
                <li>row: {chosenTicket.row}</li>
                <li>seat: {chosenTicket.seat}</li>
                </ul>
              </section>
            </section>
            <section className="tickets_card-cont" style={{padding: '20px 20px 10px 30px'}} >
            <section className="tickets_seat_trade" >
                <ul>
                <li><i className="fa fa-map-marker" />LOCATION:</li>
                <li><span className="section">{chosenEvent.location}</span></li>
                <li><i className="fa fa-calendar" />DATE:</li>
                <li ><span className="section">{chosenFormattedDate}</span></li>
                <li><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
                </ul>
            </section>
            </section>
        </article>     
    </>
    )
  }
  

export default singleTicket;