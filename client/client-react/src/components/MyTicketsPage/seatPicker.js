import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect , } from "react";
import {Dropdown} from "@fluentui/react";
import {getSeatsArrayForRow} from "../../api/TicketAPI";
import {getTicketsForTrade} from "../../api/TradeAPI";
import { getEventsByName } from "../../api/EventAPI.js";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SingleTicket from './seatMapSingleTicket';

function SeatPicker(props) {
  const ticket = props.ticket;
  const ticketId = ticket._id;
  const event = props.event;
  const eventId = event._id;
  const [date,  setSelectedDate] = useState(undefined);
  const [eventDateList, setEventDateList] = useState([]);
  const [section,  setSelectedSection] = useState("A");
  const [row,  setSelectedRow] = useState("E");
  const [seat,  setSelectedSeat] = useState();
  const [numOfTickets,  setNumOfTickets] = useState(0);
  const [seatList,  setSeatList] = useState(undefined);
  const [confirm,  setConfirm] = useState(false);
  const [optionalTickets, setOptionalTickets] = useState([]);
  const [chosenTicket, setChosenTicket] = useState(0);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });


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

   console.log(optionalTickets);
   console.log(chosenTicket);

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


  function HandelAddClick(){
    if(confirm==false){
      setConfirm(true);
    }
    // setChosenTicket(chosenTicket => chosenTicket.concat([optionalTickets]))
    // let chosen = {...TempSeatList[seat-1]};
    // chosen.name = 1;
    // TempSeatList[seat-1] = chosen;
    // setSeatList(TempSeatList);
    // setNumOfTickets(numOfTickets+1);
    // setSelectedSeat(0);
    //setOptionalTickets([section,row,seat+1]);
  }
  // console.log(ticket);
  // const DisplayMyTicket = <SingleTicket key={ticket._id} ticket={ticket} />;
  // console.log(DisplayMyTicket);
  // const DisplayMyTicket = ticket?.map((ticket) => (
  //   <SingleTicket key={ticket._id} event={ticket.event} section={ticket.section} row={ticket.row} seat={ticket.seat}/>
  //   ));
  //if(chosenTicket){
    // const DisplayChosenTicket = chosenTicket?.map((chosenTicket) => (
    // <SingleTicket key={chosenTicket._id} ticket={chosenTicket}/>
    // ));
  //}

  //console.log(DisplayChosenTicket);
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="seatChart__text">
                <div className="seatChart__section-title">
                  <h2>List Of Available Seats To Trade</h2>
                </div>
                {/* <div className="section-title select-seat">
                  <h5>Date</h5>
                </div> */}
                <div className="seat_chart_trade_search_form">

                  <div className="select__option" >
                      <Dropdown
                        placeholder="Select a Seat to Trade"
                        options={dropdownTickets}
                        onChange={(_, item) => {
                          HandelTicketClick(item.key);
                        }}
                      />
                      {/* {
                      chosenTicket==undefined
                      ? <button className="seatChart__add__button disabledCursor"  onClick={(e) => e.preventDefault() }>+ Add Seat</button>

                      : <button className="seatChart__add__button notDisabled" onClick={HandelAddClick}>+ Add Seat</button>
                      } */}
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
              : <button className="seatChart__add__button" onClick={HandelAddClick} style={{width: '500px',background: '#faae0b'}}>Request Seat Trade</button>
              }
              {
              confirm==false || chosenTicket==0
              ? <div></div>
              : <button className="seatChart__add__button" style={{marginLeft: '100px', marginTop: '20px',width: '300px',background: 'rgb(240 50 80)'}}>Confirm Request</button>
              }
          </div>
          </div>
        </div>
    </>
  );
}

export default SeatPicker;
