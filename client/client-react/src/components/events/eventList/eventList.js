import React from "react";
import EventGrid from "./eventGrid";
import { useEffect, useState } from "react";
import { getLatestEvents } from "../../../api/EventAPI.js";

function EventList() {
  const [events, setEvents] = useState();
  useEffect(
    () =>
    getLatestEvents(4)
        .then((res) => res.data)
        .then((res) => setEvents(res)),
    []
  );


  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
      <div id="event" className="content-event">
        {}
        <div className="container">
          <h3>Dates</h3>
          {events.map((event) => {
        return <EventGrid key={event._id} event={event} />;
        })}
        </div>
        {}
      </div>
      </>
    );
}

export default EventList;
