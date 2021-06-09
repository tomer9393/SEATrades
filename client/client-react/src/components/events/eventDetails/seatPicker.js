import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect , } from "react";
import {Dropdown} from "@fluentui/react";
import {getSeatsArrayForRow} from "../../../api/TicketAPI";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SingleTicket from './singleTicket';
import Checkout from '../../checkoutPage/checkout'

function SeatPicker(props) {
  const event = props.event;
  //const sendDataToParent = props.sendDataToParent;
  const eventId = event._id;
  const [row,  setSelectedRow] = useState("A");
  const [seat,  setSelectedSeat] = useState();
  const [numOfTickets,  setNumOfTickets] = useState(0);
  const [seatList,  setSeatList] = useState(undefined);
  //const [dropdownRow,  setDropdownRow] = useState([]);
  const [tickets, setTickets] = useState();
  const [TempSelectedTickets, setSelectedTickets] = useState([]);
  const [reset,  setReset] = useState(false);
  const [checkout ,  setCheckout] = useState(false);
  const [placeOrder,  setPlaceOrder] = useState(false);
  const [firstSeat,  setFirstSeat] = useState();
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });
  

  const rows = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"];
  // useEffect(() => {
  //   if(reset==true){
  //     sendDataToParent(true);
  //     // setSeatList(undefined);
  //     // setSelectedTickets([]);
  //     // setNumOfTickets(0);
  //     // //setSelectedRow('A');
  //     // console.log(seat);
  //     // setSelectedSeat(Seats[firstSeat]);
  //     // setFirstSeat();
  //     // console.log(seat);
  //     // setReset(false)
  //   }
  // }, [reset,sendDataToParent]);

  
  useEffect(() => {
    getSeatsArrayForRow(eventId, row).then((res) => {
      setSeatList(res.data);
    });
  }, [reset, eventId, row]);

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

  const dropdownRow = [
    { key: 0, text: "" },
    ...rows.map((row) => ({
      key: row,
      text: row,
    })),
  ];
 

  const dropdownSeat = [
    { key: 0, text: "Select Seat" },
    ...Seats.map((seat) => ({
      key: seat,
      text: seat,
    })),
  ];

  function HandelRowClick(key){
    setSelectedRow(key);
    setTickets([key,seat]);
  }

  function HandelSeatClick(key){
    setSelectedSeat(key);
    setTickets([row,key]);
  }

  function HandelAddClick(){
    var indexSeat = Seats.findIndex(e => e == seat);
    // if(numOfTickets==0){
    //   setFirstSeat(indexSeat);
    // }
    var nextSeat = Seats[indexSeat+1];
    setSelectedTickets(TempSelectedTickets => TempSelectedTickets.concat([tickets]))
    let chosen = 1;
    TempSeatList[seat-1] = chosen;
    setSeatList(TempSeatList);
    setNumOfTickets(numOfTickets+1);
    setSelectedSeat(nextSeat);
    setTickets([row,nextSeat]);
  }

  function HandelCheckoutClick(){
    if(checkout==false){
      setCheckout(true);
    }
    if(checkout==true){
      setCheckout(false);
    }
  }


  function HandelRemoveClick(){
    window.location.reload();
    // setSelectedTickets([]);
    // setNumOfTickets(0);
    // setSelectedRow('A');
    // setSelectedSeat();
    // console.log(row);
    // console.log(seat);
    //setSelectedSeat(firstSeat);
    //refresh 
    //props.onChange(props.value+1);
    //setReset(true);
  }

  function CheckoutButton(){
       return <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <div><button className="seatChart__add__button" onClick={HandelCheckoutClick} style={{marginTop: '20px',width: '240px',background: 'rgb(250, 174, 11)'}}>BACK</button></div>
              <div><button className="seatChart__add__button" onClick={HandelCheckoutClick} style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>CHECKOUT</button></div>
              </div>
  }

  const SelectedTickets = TempSelectedTickets?.map((ticket) => (
  <div key={ticket[1]}><SingleTicket key={ticket[1]} event={event} row={ticket[0]} seat={ticket[1]}/>
  </div>
  ));

  return checkout==false ? (
    <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="seatChart__text">
                <div className="section-title">
                  <h2>List Of Available Seats</h2>
                </div>
                <div className="section-title select-seat">
                  <h5>Row</h5>
                  <h5>Seat</h5>
                </div>
                <div className="seatChart__search__form">
                  <form>
                    <div className="select__option" >
                      <Dropdown 
                        placeholder={row}
                        options={dropdownRow}
                        onChange={(_, item) => {
                          HandelRowClick(item.key);
                          console.log(item.key);
                          console.log(row);
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
                  seat==undefined || seat==0 || numOfTickets==4 || row==0 
                  ? <button className="seatChart__add__button disabledCursor"  onClick={(e) => e.preventDefault() }>+ Add Seat</button>
                  
                  : <button className="seatChart__add__button notDisabled" onClick={HandelAddClick}>+ Add Seat</button>
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
            <h1 style={{textAlign: 'center'}}>Your List Of Selected Seats</h1>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {SelectedTickets}
              <div>
              {
              TempSelectedTickets.length==0 
              ? <div></div>
              // <button className="seatChart__add__button disabledCursor"  onClick={(e) => e.preventDefault() }>CHECKOUT</button>
              
              : <button className="seatChart__add__button" onClick={HandelCheckoutClick} style={{ marginTop: '20px', width: "70%",marginLeft: '15%',background: '#3f51b5'}}>CHECKOUT</button>
              // <CheckoutButton></CheckoutButton>
              // <Link to="#"  className="seatChart__add__button"  onClick={(e) => HandelCheckoutClick() } style={{right: '210px'}}>CHECKOUT</Link>
              }
              {
              numOfTickets>0 ?
              <button  className="seatChart__delete__button" style={{ width: "70%",marginLeft: '15%',marginTop: '15px' }} onClick={()=>{HandelRemoveClick()}}>Reset Seat Selection</button>
              : <div></div>
              }
              </div>
              </div>
          </div>

          </div>
        </div>
        
    </>
  ) : (
    <div className="container container_checkout">
    <div className="row">
      <div className="col-lg-12">
      {
      placeOrder==false ?
      <button  className="seatChart__delete__button" style={{ width: "70%",marginLeft: '15%' }} onClick={()=>{HandelCheckoutClick()}}>Back to Seat Selection</button>
      : <div></div>
      }
      <Checkout  selectedSeats={TempSelectedTickets} event={event} setPlaceOrder={setPlaceOrder}></Checkout>
      </div>
      </div>
      </div>
  );
}

export default SeatPicker;
