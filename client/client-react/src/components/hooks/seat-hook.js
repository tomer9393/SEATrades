import React, { useContext , useState , useEffect } from "react";
import { getSeatsArrayForRow } from "../../api/TicketAPI";


export function GetSeatList(eventId, section, row) {
  console.log(eventId);
  console.log(section);
  console.log(row);
  const [seatList,  setSeats] = useState();
  //console.log(row);
  
  useEffect(() => {
    getSeatsArrayForRow(eventId, section, row).then((res) => {
      setSeats(res.data);
    });
  }, [eventId, section, row]);
  console.log(seatList);
  //console.log(Seats);
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
  return seatList;
}