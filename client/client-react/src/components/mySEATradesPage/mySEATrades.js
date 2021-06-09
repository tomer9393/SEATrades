import React from "react";
import SingleTicket from "./singleTicket"
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { MyAlertsTrades , MyRequestsTrades  ,acceptTrade , rejectTrade } from "../../api/TradeAPI.js";


export default function MySeatTrades() {
  const auth = useContext(AuthContext);
  const id = auth.userId;
  const [myAlerts, setMyAlerts] = useState(undefined);
  const [myRequests, setMyRequests] = useState(undefined);

  useEffect(() => {
    MyAlertsTrades(id).then((res) => {
      setMyAlerts(res.data);
    });
  }, [id]);

  useEffect(() => {
    MyRequestsTrades(id).then((res) => {
      setMyRequests(res.data);
    });
  }, [id]);


  // function FilterAlerts(array){
  //   const myTicketsAlerts = myAlerts?.map((alert) => alert = alert.MyTicket);

  //   if(myTicketsAlerts){
  //     var filterMyTickets =  [...new Map(myTicketsAlerts.map(o => [o._id, o])).values()]
  //   }

  //   const filter = [];
  //   filterMyTickets.forEach((ticket) => {
  //   var my_ticket_id = ticket._id;
    
  //   let alerts = array.filter((alert) => alert.MyTicket._id == my_ticket_id).map((alert,id) => (alert = alert.TradeTicket, id=id._id ));

  //   filter.push([ticket, alerts])
  //   })

  //   return filter;
  // }

  // if(myAlerts){
  //   var alerts = FilterAlerts(myAlerts);
  // }
  
  // console.log(alerts);

  const MyAlertsSingleTickets = myAlerts?.map((ticket) => {
    return <SingleTicket key={ticket._id} MyTicket={ticket.MyTicket} TradeTicket={ticket.TradeTicket} id={id} alert={true} tradeId={ticket._id} />;
    }
  );

  const MyRequestsSingleTickets = myRequests?.map((ticket) => {
    return <SingleTicket key={ticket._id} MyTicket={ticket.MyTicket} TradeTicket={ticket.TradeTicket} id={id} alert={false} status={ticket.Status}/>;
    }
  );
  
  console.log("My Alerts from DB:");
  console.log(myAlerts);
  console.log("My Requests from DB:");
  console.log(myRequests);
  console.log("My Alerts SingleTickets:");
  console.log(MyAlertsSingleTickets);
  console.log("My Requests SingleTickets:");
  console.log(MyRequestsSingleTickets);

  //const ticket = tickets;
  //console.log(tickets);

  return myAlerts==0 && myRequests==0 ? (
    <section className="about spad">
    <div className="container">
      <div className="col-lg-12 col-md-12">
        <div className="event__title">
        <h1>No Ticket Available</h1>
        </div>
      </div>
    </div>
  </section>
  ) : (
    <>
    <section className="about spad">
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="event__title">
            <h1>My SEATrade Alerts</h1>
            <h2>A list of Seats that other customers offered to trade with <strong style={{color: '#ec171e'}}>YOUR</strong> tradable seats. </h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {MyAlertsSingleTickets}
              </div>
          </div>
          </div>
        </div>
        <hr style={{width: '70%', marginTop: '50px'}}></hr>
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="event__title">
            <h1 style={{marginTop: '40px'}} >My SEATrade Requests</h1>
            <h2>A list of Requests you made to trade your seat with <strong style={{color: '#ec171e'}}>OTHERS</strong> tradable seats. </h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {MyRequestsSingleTickets}
              </div>
          </div>
          </div>
        </div>
      </section>
      </>
    );
}

