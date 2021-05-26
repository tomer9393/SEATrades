import React, { useContext , useState , useEffect } from "react";
import SeatPicker from "./seatPicker2.js";


function SeatMap(){

  //render() {
  console.log('SeatMap Render lifecycle')

  return (
    <>
        <div className="seatChart_content" >
              <div className="seatChart_row">
                <div className="col-lg-12">
                  <div className="seatChart_img">
                  <img src="/img/seating-map.jpg"/>
                  </div>
                </div>
              </div>
        
            <div className="seatChart_right">
                <SeatPicker></SeatPicker>
            </div>
        </div>
    </>
    );
  //}
}


export default SeatMap;
