import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState, useContext } from "react";
import SeatMap from "./seatMap.js"
import { MyAlertsTrades , MyRequestsTrades } from "../../api/TradeAPI.js";

function SingleTicket(props) {
  const MyTicket = props.MyTicket;
  const MyTicketId = props.MyTicket._id;
  const tradeId=props.tradeId;
  console.log(MyTicketId)
  const TradeTicket = props.TradeTicket;
  const MyEvent = MyTicket.event;
  const TradeEvent = TradeTicket.event;
  const alert=props.alert;
  const status=props.status;
  var MyDate = new Date(MyEvent.date);
  var TradeDate = new Date(MyEvent.date);
  var MyFormattedDate = format(MyDate, "dd/MM/yyyy");
  var TradeFormattedDate = format(TradeDate, "dd/MM/yyyy");
  const [showOffer, setShowOffer] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [trade, setTrade] = useState(false);
  const [unTrade, setUntrade] = useState(false);
  const [existTrade, setExistTrade] = useState(undefined);
  const [myAlerts, setMyAlerts] = useState(undefined);
  //const [status, setStatus] = useState(requestStatus);

  // useEffect(() => {
  //   MyAlertsTrades(id).then((res) => {
  //     setMyAlerts(res.data);
  //   });
  // }, [id]);
  var status_color;
  if(status=='Waiting'){
    status_color='rgb(95 177 227)' // blue
  }else if(status=='Accept'){
    status_color='rgb(141 198 67)' // green
  }else if(status=='Rejected'){
    status_color='rgb(236 23 30)' // red
  }else{
    status_color='#D8DDE0' // grey
  }

  function HandelShowOfferSeatsClick(){
    if(showOffer==false){
      setShowOffer(true);
    }
    if(showOffer==true){
      setShowOffer(false);
    }
  }

  function HandelShowRequestSeatsClick(){
    if(showRequest==false){
      setShowRequest(true);
    }
    if(showRequest==true){
      setShowRequest(false);
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
//    boolTicketForTrade(ticketId);
    window.location.reload();
  }

  function Status1(){
       return <div>
              <div style={{marginBottom: '30px',color: "black" }}>Request status:</div>
              <div><Link style={{background: 'rgb(141 198 67)'}} to="#">{status}</Link></div>
              </div>
    
  }

  function Status(){
    return <div style={{display: 'flex',justifyContent: 'space-between'}}>
           <div><button className="seatChart__add__button" style={{marginTop: '20px',width: '240px',background: 'rgb(250, 174, 11)'}}>Cancel</button></div>
           <div><button className="seatChart__add__button" style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>Confirm</button></div>
           
           </div>
  }

  function UNTradeButton(){
    if(unTrade==false){
      if(existTrade == false || existTrade ==undefined){
      return  <div><div><Link to="#" onClick={HandelShowOfferSeatsClick}>Show Offered Seat</Link></div>
              {/* <div><Link to="#" onClick={HandelUnTradeClick} style={{right: '210px'}}>UNTRADE</Link></div>*/}</div> 
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


  if (alert==true){
    return (
      <>
        <article className="tickets_card">
          <div className="forTrade_top"> <a >MY SEAT</a></div>
          <section className="tickets_seat">
              <section>
                <ul>
                <li>section: <strong className="section2">{MyTicket.section}</strong></li>
                {/* <li className="section" ></li> */}
                <li>row: <strong className="section2">{MyTicket.row}</strong></li>
                <li>seat: <strong className="section2">{MyTicket.seat}</strong></li>
                </ul>
              </section>
            </section>
            <section className="tickets_card-cont">
            <h2>{MyEvent.name}</h2>
            <section className="tickets_card-list">
                <ul>
                <li ><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
                <li ><i className="fa fa-calendar" /><span >{MyFormattedDate}</span></li>
                <li ><i className="fa fa-map-marker" /><span>{MyEvent.location}</span></li>
                </ul>
            </section>
             <div><Link to="#" onClick={HandelShowOfferSeatsClick}>Show Offered Seat</Link></div>
            </section>
          </article>
          {
          showOffer==false
          ? <div></div>
          : <SeatMap TradeTicket={TradeTicket} tradeId={tradeId}></SeatMap>
          }                     
    </>
    )
  } 
  return (
    <>
    <article className="tickets_card">
    {/* <div className="forTrade_top"> <a >MY SEAT</a></div> */}
    <section className="tickets_seat">
        <section>
          <ul>
          <li>section: <strong className="section2">{MyTicket.section}</strong></li>
          {/* <li className="section" ></li> */}
          <li>row: <strong className="section2">{MyTicket.row}</strong></li>
          <li>seat: <strong className="section2">{MyTicket.seat}</strong></li>
          </ul>
        </section>
      </section>
      <section className="tickets_card-cont">
      <h2>{MyEvent.name}</h2>
      <section className="tickets_card-list">
          <ul>
          <li ><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
          <li ><i className="fa fa-calendar" /><span >{MyFormattedDate}</span></li>
          <li ><i className="fa fa-map-marker" /><span>{MyEvent.location}</span></li>
          </ul>
      </section>
        <div><Link to="#" onClick={HandelShowRequestSeatsClick}>Show Requested Seat</Link></div>
      </section>
    </article>
    {
      showRequest==false
      ? <div></div>
      :
      <> 
      <div style={{ display: 'flex',justifyContent: 'space-evenly',marginTop: '10px'}}>
              <img src="img/down-arrow.png" alt="" />
              <img src="img/down-arrow.png" alt="" />
              <img src="img/down-arrow.png" alt="" />
              <img src="img/down-arrow.png" alt="" />
              <img src="img/down-arrow.png" alt="" />
        </div>
        <article className="tickets_card">
        <div className="forTrade_top"> <a >Requested SEAT</a></div>
        <section className="tickets_seat">
            <section>
              <ul>
              <li>section: <strong className="section2">{TradeTicket.section}</strong></li>
              {/* <li className="section" ></li> */}
              <li>row: <strong className="section2">{TradeTicket.row}</strong></li>
              <li>seat: <strong className="section2">{TradeTicket.seat}</strong></li>
              </ul>
            </section>
          </section>
          
          <section className="tickets_card-cont">
          <h2>{TradeEvent.name}</h2>
          <section className="tickets_card-list">
              <ul>
              <li ><i className="fa  fa-clock-o" /><span>20:30pm</span></li>
              <li ><i className="fa fa-calendar" /><span >{TradeFormattedDate}</span></li>
              <li ><i className="fa fa-map-marker" /><span>{TradeEvent.location}</span></li>
              </ul>
          </section>
          </section>
          <section className="tickets_card-cont">
          <section className="tickets_card-list">
              <div>
              <a style={{marginRight: '150px', color: '#323232',backgroundColor: 'white',background: 'none',paddingRight: '20px',fontSize: '20px'}} to="#">Request Status:</a>
              <a style={{background: status_color}} to="#">{status}</a>
              </div>
          </section>
          </section>
        </article>
        </>
        }     
    </>
    )
}

export default SingleTicket;