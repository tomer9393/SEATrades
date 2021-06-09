import React from "react";
import { format } from "date-fns";
import { useState, useEffect , } from "react";


function SingleTicket(props) {
  const MyTicket = props.MyTicket;
  const MyEvent = MyTicket.event;
  var MyDate = new Date(MyEvent.date);
  var MyFormattedDate = format(MyDate, "dd/MM/yyyy");

    return (
      <>
       <article className="tickets_card">
       <div className="forTrade_top" style={{background:'rgb(94 176 223)',width: '544.984px'}}> <a style={{color:'#FFFFFF',marginRight: '300px'}}>OFFERED SEAT</a></div>
          <section className="tickets_seat" style={{width: '220px'}}>
              <section>
                <ul>
                <li>section: <strong className="section2">{MyTicket.section}</strong></li>
                <li>row: <strong className="section2">{MyTicket.row}</strong></li>
                <li>seat: <strong className="section2">{MyTicket.seat}</strong></li>
                </ul>
              </section>
            </section>
            <section className="tickets_card-cont trade_request"  >
            <section className="tickets_seat_trade" >
                <ul style={{marginTop: '10px'}}>
                <li><i className="fa fa-map-marker" />LOCATION:</li>
                <li><span className="section">{MyEvent.location}</span></li>
                <li><i className="fa fa-calendar" />DATE:</li>
                <li ><span className="section">{MyFormattedDate}</span></li>
                <li><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
                </ul>
            </section>
            </section>
        </article>     
    </>
    )
  }
  

export default SingleTicket;