import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect , } from "react";
import {Dropdown} from "@fluentui/react";
import {getSeatsArrayForRow} from "../../api/TicketAPI";
import {getTicketsForSwap} from "../../api/TradeAPI";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SingleTicket from './seatMapSingleTicket';

function SeatPicker(props) {
  const event = props.event;
  const eventId = event._id;
  const [section,  setSelectedSection] = useState("A");
  const [row,  setSelectedRow] = useState("E");
  const [seat,  setSelectedSeat] = useState();
  const [numOfTickets,  setNumOfTickets] = useState(0);
  const [seatList,  setSeatList] = useState(undefined);
  const [dropdownRow,  setDropdownRow] = useState(undefined);
  const [tickets, setTickets] = useState();
  const [TempChosenTickets, setChosenTickets] = useState([]);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });

  //const sections = ["B", "VIP"];
  //const rows = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"];
  //const rowsA = ["F","G","H","I","J","K","L","M","N","O","P","Q","R"];

  useEffect(() => {
    getTicketsForSwap(eventId, section, row).then((res) => {
      setTickets(res.data);
    });
  }, [eventId, section, row]);


  useEffect(() => {
    getSeatsArrayForRow(eventId, section, row).then((res) => {
      setSeatList(res.data);
    });
  }, [eventId, section, row]);

  let TempSeatList = seatList;
  var Seats=[];
  var num=1,i=0;
  if(TempSeatList){
    TempSeatList.forEach((s) => {
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
    { key: "B", text: "B" },
    { key: "VIP", text: "VIP" }
    // ...sections.map((section) => ({
    //   key: section,
    //   text: section,
    // })),
  ];

  // const dropdownRowA = [
  //   { key: "E", text: "E" },
  //   ...rowsA.map((row) => ({
  //     key: row,
  //     text: row,
  //   })),
  // ];
  // const dropdownRowB = [
  //   { key: "A", text: "A" },
  //   { key: "B", text: "B" },
  //   { key: "C", text: "C" }
  //   // ...rows.map((row) => ({
  //   //   key: row,
  //   //   text: row,
  //   // })),
  // ];
  // const dropdownRowVIP = [
  //   { key: "A", text: "A" },
  //   { key: "B", text: "B" },
  //   { key: "C", text: "C" },
  //   { key: "D", text: "D" }
  //   // ...rows.map((row) => ({
  //   //   key: row,
  //   //   text: row,
  //   // })),
  // ];

  useEffect(() => {
    let TempDropdownRow = [];
    const rowsA = ["F","G","H","I","J","K","L","M","N","O","P","Q","R"];
    const dropdownRowA = [
      { key: "E", text: "E" },
      ...rowsA.map((row) => ({
        key: row,
        text: row,
      })),
    ];
    const dropdownRowB = [
      { key: "A", text: "A" },
      { key: "B", text: "B" },
      { key: "C", text: "C" }
    ];
    const dropdownRowVIP = [
      { key: "A", text: "A" },
      { key: "B", text: "B" },
      { key: "C", text: "C" },
      { key: "D", text: "D" }
    ];
    if(section=='A'){TempDropdownRow = dropdownRowA;}
    else if(section=='B'){TempDropdownRow = dropdownRowB;}
    else if(section=='VIP'){TempDropdownRow = dropdownRowVIP;}
    setDropdownRow(TempDropdownRow);
  }, [section]);
  
  // var dropdownRow=[];
  // if(section=='A'){
  //   dropdownRow = dropdownRowA;
  // }
  // else if(section=='B'){
  //   dropdownRow = dropdownRowB;
  // }else{
  //   dropdownRow = dropdownRowVIP;
  // }

  const dropdownSeat = [
    { key: 0, text: "Select Seat" },
    ...Seats.map((seat) => ({
      key: seat,
      text: seat,
    })),
  ];

  var RowPlaceholder;
  if (section=="A") {
    RowPlaceholder = "E";
  } else{
    RowPlaceholder = "A";
  }
  console.log("Current row:");
  console.log(row);

  function HandelSectionClick(key){
    setSelectedSection(key);
    //setTickets([section,row,key]);
  }
  function HandelRowClick(key){
    setSelectedRow(key);
    //setTickets([section,row,key]);
  }

  function HandelSeatClick(key){
    setSelectedSeat(key);
    setTickets([section,row,key]);
  }

  function HandelAddClick(){
    setChosenTickets(TempChosenTickets => TempChosenTickets.concat([tickets]))
    let chosen = {...TempSeatList[seat-1]};
    chosen.name = 1;
    TempSeatList[seat-1] = chosen;
    setSeatList(TempSeatList);
    setNumOfTickets(numOfTickets+1);
    setSelectedSeat(0);
    //setTickets([section,row,seat+1]);
  }

  const ChosenTickets = TempChosenTickets?.map((ticket) => (
  <SingleTicket key={ticket[2]} event={event} section={ticket[0]} row={ticket[1]} seat={ticket[2]}/>
  ));

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
                        placeholder={section}
                        options={dropdownSection}
                        onChange={(_, item) => {
                          HandelSectionClick(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option" >
                      <Dropdown 
                        placeholder={RowPlaceholder}
                        options={dropdownRow}
                        onChange={(_, item) => {
                          HandelRowClick(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option">
                      <Dropdown
                        placeholder="Select Seat"
                        options={dropdownSeat}
                        onChange={(_, item) => {
                          HandelSeatClick(item.key);
                        }}
                      />
                    </div>
                  </form>
                  {
                  seat==undefined || seat==0 || numOfTickets==4
                  ? <button className="seatChart__add__button disabledCursor"  onClick={(e) => e.preventDefault() }>Request Trade</button>
                  
                  : <button className="seatChart__add__button notDisabled" onClick={HandelAddClick}>Request Trade</button>
                  }
                  {
                  numOfTickets == 4 &&
                  <div style={{ color: "red" }}>The Maximum Allowed Seats To Reserve Is 4</div>
                  }
                  {
                  seat==0 && numOfTickets!=4 &&
                  <div style={{ color: "red" }}>Select A New Seat</div>
                  }
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
              {ChosenTickets}
              </div>
          </div>
          </div>
        </div>
    </>
  );
}

export default SeatPicker;
