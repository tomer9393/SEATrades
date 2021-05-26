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
import {GetSeatList} from "../../hooks/seat-hook";

function SeatPicker(props) {
  const event = props.event;
  const eventId = event._id;
  const [section,  setSelectedSection] = useState("A");
  const [row,  setSelectedRow] = useState(undefined);
  const [seat,  setSelectedSeat] = useState(undefined);
  //const [sectionList,  setSelectedSection] = useState(undefined);
  //const [rowList,  setRows] = useState(undefined);
  //const [seatList,  setSeats] = useState(undefined);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });

  const clearFields = (
    setSelectedSection,
    setSelectedRow,
    setSelectedSeat
  ) => {
      setSelectedSection(undefined);
      setSelectedRow(undefined);
      setSelectedSeat(undefined);
  };

  const sections = [
    "A",
    "B",
    "VIP",
  ];
  
  const rows = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
  ];

  const seatsTemp = [

  ];



  function HandleSeats(key) {
    console.log(key);
    setSelectedRow(key);
    //console.log(row);
    console.log(eventId);
    console.log(section);
    var seatlist = GetSeatList(eventId, section, key)
    console.log(seatlist);
    // const Seats = seatList?.map((seat) => {
    //   var num=0;
    //   if(seat==0){
    //     num++;
    //     return num;
    //   }else{
    //     num++;
    //   }
    // }
    // );
    // console.log(Seats);
    // return Seats;
  }
  

  const dropdownSection = [
    { key: "undefined", text: "Select Section" },
    ...sections.map((section) => ({
      key: section,
      text: section,
    })),
  ];

  const dropdownRow = [
    { key: "undefined", text: "Select Row" },
    ...rows.map((row) => ({
      key: row,
      text: row,
    })),
  ];
  const dropdownSeat = [
    { key: "undefined", text: "Select Seat" },
    ...seatsTemp.map((seat) => ({
      key: seat,
      text: seat,
    })),
  ];

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="seatChart__text">
                <div
                  className="section-title"
                >
                  <h2>List Of Available Tickets</h2>
                </div>
                <div className="seatChart__search__form">
                  <form>
                  <div className="select__option" >
                      <Dropdown 
                        placeholder="Select Section"
                        options={dropdownSection}
                        onChange={(_, item) => {
                           setSelectedSection(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option" >
                      <Dropdown 
                        placeholder="Select Row"
                        options={dropdownRow}
                        onChange={(_, item) => {
                          HandleSeats(item.key);
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
                    onClick={() =>
                      homePageSearch(section, row, seat)
                        .then((res) => res.data)
                        .then((res) => {
                          clearFields(
                             setSelectedSection,
                             setSelectedRow,
                             setSelectedSeat
                          );
                          console.log(section);
                          console.log(row);
                          console.log(seat);
                          history.push({
                            pathname: "/Search",
                            state: { events: res },
                          });
                        })
                    }
                  >
                    + Add Seat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}



export default SeatPicker;
