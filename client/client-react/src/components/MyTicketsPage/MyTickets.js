import React from "react";
import SingleTicket from "./singleTicket"
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { getTicketsByUserId } from "../../api/TicketAPI.js";
import moment from "moment";

export default function MyTickets() {
  const now = moment()
  const auth = useContext(AuthContext);
  const id = auth.userId;
  const [tickets, setTickets] = useState(undefined);

  useEffect(() => {
    getTicketsByUserId(id).then((res) => {
      setTickets(res.data);
    });
  }, [id]);


  const upcomingSingleTickets = tickets?.map((ticket) => {
    var event_date = moment(ticket.event.date);
    if (now.isBefore(event_date) ) {
      return <SingleTicket key={ticket._id} ticket={ticket} happened={false} />;
    }
    }
  );
  
  const pastSingleTickets = tickets?.map((ticket) => {
    var event_date = moment(ticket.event.date);
    if (now.isAfter(event_date) ) {
      return <SingleTicket key={ticket._id} ticket={ticket} happened={true} />;
    }
    }
  );

  //const ticket = tickets;
  //console.log(tickets);

  return tickets==0 ? (
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
            <h1>List Of Upcoming Events</h1>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {upcomingSingleTickets}
              </div>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12 col-md-12">
            <div className="event__title">
            <h1>History</h1>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="tickets_row">
              {pastSingleTickets}
              </div>
          </div>
          </div>
        </div>
      </section>
      </>
    );
}

