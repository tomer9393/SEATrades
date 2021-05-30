import React, { useContext , useState , useEffect } from "react";
import Seatmap from 'react-seatmap';


function SeatMap(){
  //render() {
  var rows=5;
  console.log('SeatMap Render lifecycle')
  return (
    <>
        {/* <div className="seatChart_content">
            <div id="map-container"></div>

            <div className="seatChart_right">
                <div id="cart-container"></div>
                <div id="legend-container"></div>
            </div>
        </div> */}
        
        <Seatmap rows={rows} maxReservableSeats={3} alpha />
    </>
    );
  //}
}


export default SeatMap;
