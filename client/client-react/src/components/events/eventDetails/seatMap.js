import React, { useContext , useState , useEffect } from "react";
import SeatPicker from "./seatPicker.js";


function SeatMap(props){
  const event = props.event;
  // console.log('SeatMap Render lifecycle')

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
                <SeatPicker event={event} ></SeatPicker>
            </div>
        </div>
    </>
    );
  //}
}


export default SeatMap;
