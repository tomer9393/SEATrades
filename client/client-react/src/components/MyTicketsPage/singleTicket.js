import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState, useContext } from "react";
import Popup from '../tradePage/Popup';
import SeatMap from "./seatMap.js"
import {boolTicketForTrade,existTradeByTicket1Id} from "../../api/TradeAPI.js"

function SingleTicket(props) {
  const ticket = props.ticket;
  const ticketId = ticket._id;
  const event = props.ticket.event;
  const happened = props.happened;
  const forTrade = ticket.forTrade;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  const [showSeats, setShowSeats] = useState(false);
  const [trade, setTrade] = useState(false);
  const [unTrade, setUntrade] = useState(false);
  const [existTrade, setExistTrade] = useState(undefined);

  useEffect(() => {
    existTradeByTicket1Id(ticketId).then((res) => {
      setExistTrade(res.data);
    });
  }, [ticketId]);

  function HandelShowSeatsClick(){
    if(showSeats==false){
      setShowSeats(true);
    }
    if(showSeats==true){
      setShowSeats(false);
    }
  }

  function HandelTradeClick(){
    if(trade==false){
      setTrade(true);
    }
    if(trade==true){
      setTrade(false);
    }
  }
  function HandelUnTradeClick(){
    if(unTrade==false){
      setUntrade(true);
    }
    if(unTrade==true){
      setUntrade(false);
    }
  }
  
  function HandelConfirmTradeClick(){
    boolTicketForTrade(ticketId);
    window.location.reload();
  }

  function TradeButton(){
    if(trade==false){
      return <Link onClick={HandelTradeClick} to="#">Trade</Link>
    }
    if(trade==true){
       return <div>
              <div style={{marginBottom: '30px',color: "red" }}>you are allowd to set this ticket for trade only once!</div>
              <div><Link to="#" onClick={HandelTradeClick} style={{right: '300px'}}>Cancel</Link></div>
              <div><Link onClick={HandelConfirmTradeClick} style={{background: 'rgb(141 198 67)'}} to="#">Confirm Set for Trade</Link></div>
              </div>
    }
  }

  function UNTradeButton(){
    if(unTrade==false){
      if(existTrade == false || existTrade ==undefined){
      return  <div><div><Link to="#" onClick={HandelShowSeatsClick}>Show Seats</Link></div>
              <div><Link to="#" onClick={HandelUnTradeClick} style={{right: '210px'}}>UNTRADE</Link></div></div>
      }else{
        return <div><div><Link to="/MySEATrades" >My SEATrades</Link></div>
        <div><Link to="#" onClick={HandelUnTradeClick} style={{right: '230px'}}>UNTRADE</Link></div></div>
      }            
    }
    if(unTrade==true){
      return <div>
              <div style={{marginBottom: '30px',color: "red" }}>If you untrade this ticket, you will not be able to set it up for trade again.</div>
              <div><Link to="#" onClick={HandelUnTradeClick} style={{right: '280px'}}>Cancel</Link></div>
              <div><Link onClick={HandelConfirmTradeClick} style={{background: '#f03250'}} to="#">Confirm Non-Trade</Link></div>
              </div>
    }
  }


  if (happened==false){
    return (
      <>
        <article className="tickets_card">
          {
          forTrade==true && existTrade != true ? 
          <div className="forTrade_top"> <a>MARKED FOR TRADE</a></div>
          : existTrade == true ? <div className="forTrade_top" style={{background: '#f03250', color:'#ffffff'}}> <a>Pending SEATrade Request</a></div>
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
            {
            forTrade==false
            ? <TradeButton></TradeButton>
            : <UNTradeButton></UNTradeButton>
            }
            </section>
        </article>
          {
          showSeats==false
          ? <div></div>
          : <SeatMap ticket={ticket}></SeatMap>
          } 
                          
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

export default SingleTicket;