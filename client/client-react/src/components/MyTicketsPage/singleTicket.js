import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState, useContext } from "react";
import SeatMap from "./seatMap.js"
import {boolTicketForTrade,existTradeByTicket1Id,tradedSeatByTicketId} from "../../api/TradeAPI.js"

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
  const [tradedSeat, setTradedSeat] = useState(undefined);

  useEffect(() => {
    existTradeByTicket1Id(ticketId).then((res) => {
      setExistTrade(res.data);
    });
      tradedSeatByTicketId(ticketId).then((res) => {
      setTradedSeat(res.data);
    });
  }, [ticketId]);

//  useEffect(() => {
//    tradedSeatByTicketId(ticketId).then((res) => {
//      setTradedSeat(res.data);
//    });
//  }, [ticketId]);

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
     setTimeout(function(){
      window.location.reload(1);
   }, 1000);
  }

  function TradeButton(){
    if(trade==false){
      return <Link onClick={HandelTradeClick} to="#">Trade</Link>
    }
    if(trade==true){
       return <section className="untrade_button_section">
              <div style={{marginBottom: '30px',color: "green" }}>you are allowd to set this ticket for trade only once!</div>
              <div><Link to="#" onClick={HandelTradeClick}  className="untrade_button_down4">Cancel</Link></div>
              <div><Link onClick={HandelConfirmTradeClick} className="untrade_button_upper" style={{background: 'rgb(141 198 67)'}} to="#">Confirm Set for Trade</Link></div>
              </section>
    }
  }

  function UNTradeButton(){
    if(unTrade==false){
      if(existTrade == false || existTrade ==undefined){
      return  <section className="untrade_button_section"><div  ><Link to="#" className="untrade_button_upper" onClick={HandelShowSeatsClick}>Show Seats</Link></div>
              <div><Link to="#"  className="untrade_button_down" onClick={HandelUnTradeClick} >UNTRADE</Link></div></section>
      }else{
        return <section  className="untrade_button_section"><div><Link className="untrade_button_upper" to="/MySEATrades" >My SEATrades</Link></div>
        <div><Link to="#" onClick={HandelUnTradeClick}  className="untrade_button_down2" >UNTRADE</Link></div></section>
      }            
    }
    if(unTrade==true){
      return <section className="untrade_button_section">
              <div style={{marginBottom: '30px',color: "red" }}>If you untrade this ticket, you will not be able to set it up for trade again.</div>
              <div><Link to="#" onClick={HandelUnTradeClick} className="untrade_button_down3" >Cancel</Link></div>
              <div><Link onClick={HandelConfirmTradeClick} style={{background: '#f03250'}} className="untrade_button_upper" to="#">Confirm Non-Trade</Link></div>
              </section>
    }
  }


  if (happened==false){
    return (
      <>
        <article className="tickets_card">
          {
          forTrade==true && existTrade != true ? 
          <div className="forTrade_top"> <a style={{marginRight: '10px'}}>MARKED FOR TRADE</a></div>
          : existTrade == true ? <div className="forTrade_top" style={{background: '#f03250', color:'#ffffff'}}> <a style={{marginRight: '10px'}}>Pending Request</a></div>
          : tradedSeat == true ? <div className="forTrade_top" style={{background: 'rgb(141 198 67)', color:'#ffffff'}}> <a style={{marginRight: '30px'}}>TRADED SEAT!</a></div>
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
            forTrade==false && tradedSeat == false? <TradeButton></TradeButton>
            : forTrade==true && tradedSeat == false? <UNTradeButton></UNTradeButton>
            : tradedSeat == true ?  <div></div>
            : <div></div>
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
