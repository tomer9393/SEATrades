import React, { useContext , useState , useEffect } from "react";
import SeatPicker from "./seatPicker.js";


function SeatMap(props){

  const ticket = props.ticket;
  const event = ticket.event;
  return (
    <>
        <div className="seatChart_content" >
              <div className="seatChart_row">
                <div className="col-lg-12">
                  <div className="seatChart_img">
                  <img src="/img/seating-map2.jpg"/>
                  </div>
                </div>
              </div>
        
            <div className="seatChart_right">
                <SeatPicker event={event} ticket={ticket}></SeatPicker>
                
            </div>
        </div>
    </>
    );

}


export default SeatMap;
