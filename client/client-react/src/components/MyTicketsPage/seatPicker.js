import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect , } from "react";
import {Dropdown} from "@fluentui/react";
import {getSeatsArrayForRow} from "../../api/TicketAPI";
import {getTicketsForTrade , createTrade} from "../../api/TradeAPI";
import { getEventsByName } from "../../api/EventAPI.js";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SingleTicket from './seatMapSingleTicket';



function SeatPicker(props) {
  const ticket = props.ticket;
  const ticketId = ticket._id;
  const myUserId = ticket.user;
  // const event = props.event;
  // const eventId = event._id;
  // const [date,  setSelectedDate] = useState(undefined);
  // const [eventDateList, setEventDateList] = useState([]);
  // const [section,  setSelectedSection] = useState("A");
  // const [row,  setSelectedRow] = useState("E");
  // const [seat,  setSelectedSeat] = useState();
  // const [numOfTickets,  setNumOfTickets] = useState(0);
  // const [seatList,  setSeatList] = useState(undefined);
  // const [confirm,  setConfirm] = useState(false);
  const [request,  setRequest] = useState(false);
  const [optionalTickets, setOptionalTickets] = useState([]);
  const [chosenTicket, setChosenTicket] = useState(0);
  initializeIcons(undefined, { disableWarnings: true });
  //const tradeUserId = chosenTicket[0].user;


  function FormatDate(date){
      var Tempdate = new Date(date);
      var formattedDate = format(Tempdate, "dd/MM/yyyy");
      return formattedDate;
  }

  useEffect(() => {
    getTicketsForTrade(ticketId).then((res) => {
      setOptionalTickets(res.data);
    });
  }, [ticketId]);

  function FormatTradeTicket(ticket){
    var tradeDate=FormatDate(ticket.event.date);
    var tradeLocation=ticket.event.location;
    var tradeSection=ticket.section;
    var tradeRow=ticket.row;
    var tradeSeat=ticket.seat;
    // const tradeTicket=[tradeDate,tradeLocation,tradeSection,tradeRow,tradeSeat];
    const tradeTicket="Date:  "+tradeDate+"  |  Location: "+tradeLocation+"  |  Section: "+tradeSection+"  |  Row: "+tradeRow+"  |  Seat: "+tradeSeat;
    return tradeTicket;
  }


  const dropdownTickets = [
    { key: 0, text: "Select a SEAT to Trade With..." },
    ...optionalTickets?.map((e) => ({
      key: e._id,
      text: FormatTradeTicket(e)

    })),
  ];

  function HandelTicketClick(key){
    if(key!=0){
    setChosenTicket((optionalTickets).filter(ticket => ticket._id == key));
    }else{setChosenTicket(key)}
  }


  function HandelRequestClick(){
    if(request==false){
      setRequest(true);
    }
    if(request==true){
      setRequest(false);
    }
  }

  function HandelConfirmClick(){
    createTrade(myUserId,chosenTicket[0].user, ticketId,chosenTicket[0]._id);
    window.location.reload();
  }
  
  function ConfirmButton(){
    // if(trade==false){
    //   return <Link onClick={HandelTradeClick} to="#">Trade</Link>
    // }
    // if(trade==true){
       return <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <div><button className="seatChart__add__button" onClick={HandelRequestClick} style={{marginTop: '20px',width: '240px',background: 'rgb(250, 174, 11)'}}>Cancel</button></div>
              <div><button className="seatChart__add__button" onClick={HandelConfirmClick} style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>Confirm Request</button></div>
              </div>
   //}
  }


  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="seatChart__text">
                <div className="seatChart__section-title">
                  <h2>List Of Available Seats To Trade</h2>
                </div>
                <div className="seat_chart_trade_search_form">

                  <div className="select__option" >
                      <Dropdown
                        placeholder="Select a Seat to Trade"
                        options={dropdownTickets}
                        onChange={(_, item) => {
                          HandelTicketClick(item.key);
                        }}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="seatChart__section-title">
            <h2>Your Seat Trade Request</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {
              chosenTicket==0
              ? <div></div>
              : <SingleTicket key={chosenTicket[0]._id} chosenTicket={chosenTicket[0]}/>
              }
              </div>
              {
              chosenTicket==0
              ? <div></div>
              : <button className="seatChart__add__button" onClick={HandelRequestClick} style={{width: '500px',background: '#faae0b'}}>Request Seat Trade</button>
              }
              {
              request==false || chosenTicket==0
              ? <div></div>
              : <ConfirmButton></ConfirmButton>
              // : <button className="seatChart__add__button" onClick={HandelConfirmClick} style={{marginLeft: '100px', marginTop: '20px',width: '300px',background: 'rgb(240 50 80)'}}>Confirm Request</button>
              }
              <hr style={{width: '100%', marginTop: '50px'}}></hr>
          </div>
          </div>
        </div>
    </>
  );
}

export default SeatPicker;
