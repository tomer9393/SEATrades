import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect , } from "react";
//import { categories, locations } from "../utils";
import {
  // TextField,
  Dropdown,
  // DatePicker,
  // mergeStyleSets,
} from "@fluentui/react";
import { homePageSearch } from "../../../api/EventAPI";
import {getSeatsArrayForRow} from "../../../api/TicketAPI";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SingleTicket from './singleTicket';

function SeatPicker(props) {
  const event = props.event;
  const eventId = event._id;
  const [section,  setSelectedSection] = useState("A");
  const [row,  setSelectedRow] = useState("A");
  const [seat,  setSelectedSeat] = useState(undefined);
  var [numOfTickets,  setNumOfTickets] = useState(1);
  const [seatList,  setSeats] = useState(undefined);
  const [tickets, setTickets] = useState(undefined);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });

  const clearFields = (
    setSelectedSection,
    setSelectedRow,
    setSelectedSeat
  ) => {
      setSelectedSection("A");
      setSelectedRow("A");
      setSelectedSeat(undefined);
  };

  const sections = [
    "B",
    "VIP",
  ];
  
  const rows = [
    "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
  ];

   
  useEffect(() => {
    getSeatsArrayForRow(eventId, section, row).then((res) => {
      setSeats(res.data);
    });
  }, [eventId, section, row]);
  

  // useEffect(() => {
  //   <SingleTicket event={event} section={section} row={row} seat={seat}/>.then((res) => {
  //     setTickets(res.data);
  //   });
  // }, [id]);

  // useEffect(() => {
  //   //let ticket;
  //   setTickets(section,row,seat);
  // }, [section,row,seat]);


  // function CreateTicket(section,row,seat){
  //   return <SingleTicket event={event} section={section} row={row} seat={seat}/>;
  // }
  // const chosenTickets2 = tickets?.map((ticket) => (
  //   <SingleTicket key={ticket._id} event={event} section={ticket.section} row={ticket.row} seat={ticket.seat}/>
  // ));
  console.log(tickets)
  const chosenTickets3 = tickets?.map((ticket) => (
    <SingleTicket key={numOfTickets=numOfTickets+numOfTickets} event={event} section={ticket[1]} row={ticket[2]} seat={ticket[2]}/>
  ));

  console.log(tickets)
  console.log(chosenTickets3)

  var chosenTickets;
  
  var Seats=[],num=1,i=0;
  if(seatList){
      seatList.forEach((s) => {
        if(s==0){
          Seats[i]=num;
          num++;
          i++;
        }
        else{
          num++;
        }
      }
    );
  }

  const dropdownSection = [
    { key: "A", text: "A" },
    ...sections.map((section) => ({
      key: section,
      text: section,
    })),
  ];

  const dropdownRow = [
    { key: "A", text: "A" },
    ...rows.map((row) => ({
      key: row,
      text: row,
    })),
  ];

  const dropdownSeat = [
    { key: "undefined", text: "Select Seat" },
    ...Seats.map((seat) => ({
      key: seat,
      text: seat,
    })),
  ];


  function HandelClick(){
    setTickets([numOfTickets,section,row,seat]);
    setNumOfTickets(numOfTickets+1);
    //chosenTickets=CreateTicket(section, row, seat)
    // .then((res) => res.data)
    // .then((res) => {
      clearFields(
         setSelectedSection,
         setSelectedRow,
         setSelectedSeat
      );
      console.log(section);
      console.log(row);
      console.log(seat);
      //console.log(chosenTickets);
      
    // })
  }

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="seatChart__text">
                <div className="section-title">
                  <h2>List Of Available Seats</h2>
                </div>
                <div className="section-title select-seat">
                  <h5>Section</h5>
                  <h5>Row</h5>
                  <h5>Seat</h5>
                </div>
                <div className="seatChart__search__form">
                  <form>
                  <div className="select__option" >
                      <Dropdown 
                        placeholder="A"
                        options={dropdownSection}
                        onChange={(_, item) => {
                           setSelectedSection(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option" >
                      <Dropdown 
                        placeholder="A"
                        options={dropdownRow}
                        onChange={(_, item) => {
                          setSelectedRow(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option">
                      <Dropdown
                        placeholder="Select Seat"
                        options={dropdownSeat}
                        onChange={(_, item) => {
                           setSelectedSeat(item.key);
                        }}
                        
                      />
                    </div>
                  </form>
                  <button className="seatChart__add__button"
                    onClick={HandelClick}
                  >
                    + Add Seat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="event__title">
            <h1>Your List Of Chosen Seats</h1>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {chosenTickets3}
              </div>
          </div>
          </div>
        </div>
    </>
  );
}



export default SeatPicker;
