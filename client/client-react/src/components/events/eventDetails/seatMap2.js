import React, { useContext , useState , useEffect } from "react";
import Seatchart from './seatchart.js';

class SeatMap extends React.Component{

  render() {
    var options = {
      // Reserved and disabled seats are indexed
      // from left to right by starting from 0.
      // Given the seatmap as a 2D array and an index [R, C]
      // the following values can obtained as follow:
      // I = columns * R + C
      map: {
          id: 'map-container',
          rows: 5,
          columns: 5,
          // e.g. Reserved Seat [Row: 1, Col: 2] = 7 * 1 + 2 = 9
          reserved: {
              seats: [],
          },
          disabled: {
              seats: [],
              rows: [],
              columns: []
          }
      },
      types: [
          { type: "regular", backgroundColor: "#006c80", price: 10, selected: [23, 24] },
          { type: "reduced", backgroundColor: "#287233", price: 7.5, selected: [25, 26] }
      ],
      cart: {
          id: 'cart-container',
          width: 280,
          height: 250,
          currency: '£',
      },
      legend: {
          id: 'legend-container',
      },
      assets: {
          path: "./assets",
      }
  };
  var sc = new Seatchart(options);
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
    </>
    );
  }
}


export default SeatMap;
