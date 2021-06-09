import React, { useContext , useState , useEffect } from "react";
//import SeatPicker from "./seatPicker.js";
import SingleTicket from "./seatMapSingleTicket"
import { acceptTrade , rejectTrade } from "../../api/TradeAPI.js";


function SeatMap(props){
  const tradeId=props.tradeId;
  const TradeTicket = props.TradeTicket;
  const event = TradeTicket.event;
  const [accept,  setAccept] = useState(false);
  const [reject,  setReject] = useState(false);

  function HandelAcceptClick(){
    if(accept==false){
      setAccept(true);
    }
    if(accept==true){
      setAccept(false);
    }
  }

  function HandelRejectClick(){
    if(reject==false){
      setReject(true);
    }
    if(reject==true){
      setReject(false);
    }
  }

  function HandelAcceptTrade(){
    acceptTrade(tradeId);
    window.location.reload();
  }

  function HandelRejectTrade(){
    rejectTrade(tradeId);
    window.location.reload();
  }

  function AcceptRejectButton(){
    return <div style={{display: 'flex',justifyContent: 'space-between'}}>
           <div><button className="seatChart__add__button" onClick={HandelRejectClick} style={{marginTop: '20px',width: '240px',background: 'rgb(236 23 30)'}}>Reject Trade Offer</button></div>
           <div><button className="seatChart__add__button" onClick={HandelAcceptClick} style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>Accept Trade Offer</button></div>
           </div>
  }

  function AcceptButton(){
    return  <div>
            <button className="seatChart__add__button" style={{width: '500px',background:'#8ec547', marginLeft: '22px',marginTop: '10px'}}>Accept Trade Offer</button>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
           <div><button className="seatChart__add__button" onClick={HandelAcceptClick} style={{marginTop: '20px',width: '240px',background: 'rgb(250, 174, 11)'}}>Cancel</button></div>
           <div><button className="seatChart__add__button" onClick={HandelAcceptTrade} style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>Confirm</button></div>
           </div>
           </div>
  }

  function RejectButton(){
    return <div>
            <button className="seatChart__add__button" style={{width: '500px',background:'rgb(236 23 30)', marginLeft: '22px',marginTop: '10px'}}>Reject Trade Offer</button>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
           <div><button className="seatChart__add__button" onClick={HandelRejectClick} style={{marginTop: '20px',width: '240px',background: 'rgb(250, 174, 11)'}}>Cancel</button></div>
           <div><button className="seatChart__add__button" onClick={HandelRejectTrade} style={{ marginTop: '20px',width: '240px',background: 'rgb(141 198 67)'}}>Confirm</button></div>
           </div>
           </div>
  }

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
            <div style={{ display: 'flex',justifyContent: 'space-evenly',marginTop: '10px'}}>
          <img src="img/down-arrow.png" alt="" />
          <img src="img/down-arrow.png" alt="" />
          <img src="img/down-arrow.png" alt="" />
          <img src="img/down-arrow.png" alt="" />
          <img src="img/down-arrow.png" alt="" />
        </div>
        <div className="col-lg-12 col-md-12">
              <div className="tickets_row event__title">
                {/* <h1 style={{textAlign: 'center'}}>Offered Seat</h1> */}
                <SingleTicket event={event} MyTicket={TradeTicket}></SingleTicket>
                {
                accept==false && reject==false
                ? <AcceptRejectButton></AcceptRejectButton>
                // <button className="seatChart__add__button" onClick={HandelAcceptClick} style={{width: '500px',background:'#8ec547', marginLeft: '22px',marginTop: '10px'}}>Accept Trade Offer</button>
                : accept==true? <AcceptButton></AcceptButton>
                : reject==true ? <RejectButton></RejectButton> 
                : <div></div>
                }
                </div>
              </div>
            </div>
        </div>
    </>
    );

}


export default SeatMap;
