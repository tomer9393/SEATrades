import React from "react";
import EventGrid from "./eventGrid";

class EventList extends React.Component {
  render() {
    return (
      <div id="event" className="content-event">
        {}
        <div className="container">
          <h3>Events</h3>
          <EventGrid></EventGrid>
          <EventGrid></EventGrid>
          <EventGrid></EventGrid>
          <EventGrid></EventGrid>
          <EventGrid></EventGrid>
        </div>
        {}
      </div>
    );
  }
}

export default EventList;
