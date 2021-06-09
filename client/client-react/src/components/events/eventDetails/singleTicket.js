import React from "react";
import { format } from "date-fns";

function singleTicket(props) {
  var section;
  const row=props.row 
  const seat=props.seat
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  var price = event.minPrice;
  if(row=="A" || row=="B" || row=="C" || row=="D"){
    if(row=="D"){
      section="VIP"
      price = price + 100;
    }
    if(row=="A" || row=="B"){
      if(seat>4 && seat<19){
        section="VIP"
        price = price + 100;
      }else {
        section="B"
        price = price + 40
      }
    }
    if(row=="C"){
      if(seat>2 && seat<21){
        section="VIP"
        price = price + 100;
      }else {
        section="B"
        price = price + 40
      }
    }
  }else {section = "A"}

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
            <h2  style={{textDecoration: 'none', color: 'green'}}>Price: ₪{price} </h2>
            <section className="tickets_card-list">
                <ul>
                <li ><h2>{event.name}</h2></li>
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