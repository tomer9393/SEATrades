import React, { useContext , useState , useEffect } from "react";

class SeatMap extends React.Component{

  render() {
  console.log('SeatMap Render lifecycle')

  return (
    <>
        <div className="seatChart_content" >
            <div id="map-container"></div>

            <div className="seatChart_right">
                <div id="cart-container"></div>
                <div id="legend-container"></div>
            </div>
        </div>
    </>
    );
  }
}


export default SeatMap;
